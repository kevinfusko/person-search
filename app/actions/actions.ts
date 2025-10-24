//app/actions/actions.ts

'use server'

import { revalidatePath } from 'next/cache'
import { User, userSchema } from './schemas'
import { cache } from 'react'
import { prisma } from '@/lib/prisma'

export async function searchUsers(query: string): Promise<User[]> {
    console.log('Searching users with query:', query)
    
    const people = await prisma.person.findMany({
        where: {
            name: {
                startsWith: query,
                mode: 'insensitive',
            },
        },
        orderBy: {
            name: 'asc',
        },
    })

    console.log('Search results:', people)
    return people
}

export async function addUser(data: Omit<User, 'id'>): Promise<User> {
    try {
        const newUser = await prisma.person.create({
            data: {
                name: data.name,
                email: data.email,
                phoneNumber: data.phoneNumber,
            },
        })
        
        const validatedUser = userSchema.parse(newUser)
        revalidatePath('/')
        return validatedUser
    } catch (error) {
        console.error('Error adding user:', error)
        throw new Error(`Failed to add user: ${error instanceof Error ? error.message : 'Unknown error'}`)
    }
}

export async function deleteUser(id: string): Promise<void> {
    try {
        await prisma.person.delete({
            where: { id },
        })
        console.log(`User with id ${id} has been deleted.`)
        revalidatePath('/') // Revalidate the page or component path
    } catch (error) {
        console.error('Error deleting user:', error)
        throw new Error(`User with id ${id} not found`)
    }
}

export async function updateUser(id: string, data: Partial<Omit<User, 'id'>>): Promise<User> {
    try {
        const updatedUser = await prisma.person.update({
            where: { id },
            data: {
                name: data.name,
                email: data.email,
                phoneNumber: data.phoneNumber,
            },
        })

        const validatedUser = userSchema.parse(updatedUser)
        console.log(`User with id ${id} has been updated.`)
        revalidatePath('/') // Revalidate the page or component path

        return validatedUser
    } catch (error) {
        console.error('Error updating user:', error)
        throw new Error(`User with id ${id} not found`)
    }
}

export const getUserById = cache(async (id: string) => {
    try {
        const user = await prisma.person.findUnique({
            where: { id },
        })
        return user || null
    } catch (error) {
        console.error('Error fetching user:', error)
        return null
    }
})

export async function getAllUsers(): Promise<User[]> {
    try {
        const people = await prisma.person.findMany({
            orderBy: {
                name: 'asc',
            },
        })
        console.log(`Retrieved ${people.length} users from database`)
        return people
    } catch (error) {
        console.error('Error fetching all users:', error)
        return []
    }
}
