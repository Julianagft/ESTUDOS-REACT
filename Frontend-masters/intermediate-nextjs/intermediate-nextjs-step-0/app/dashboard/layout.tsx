"use client"

import Shell from "@/components/Shell"
import { usePathname } from "next/navigation"

import React, { ReactNode } from 'react';

export default function Dashboard ({ children, events, rsvps }: { children: ReactNode, events: any, rsvps: any }) {
    const path = usePathname()

    return (
        <Shell>
         {/* App Bar + the tool bar, and whatever you put in between its children is the body   */}

         {
            path === "/dashboard" ? (
                <div className="flex w-full h-full">
                    <div className="w-1/2 border-r border-default-50">
                        {rsvps}
                    </div>
                    <div className="w-1/2 flex flex-col">
                        <div className="border-b border-default-50 w-full h-1/2">
                              {events}  
                        </div>
                        <div className="w-full h-1/2">
                            {children}
                        </div>
                    </div>
                </div>
            ) : <div>{children}</div>
         }
        </Shell>
    )
}