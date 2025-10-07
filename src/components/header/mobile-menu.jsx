import React from 'react'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet'
import { Menu } from 'lucide-react'
import { buttonVariants } from '../ui/button'

const MobileMenu = () => {
  return (
    <Sheet>
        <SheetTrigger className={buttonVariants({variant: "navLink", size: "icon", className: "lg:hidden"})}>
            <Menu className='size-5'/>
        </SheetTrigger>
        <SheetContent className="h-[500px]" side="top">
            <SheetHeader className="hidden">
                <SheetTitle>

                </SheetTitle>
                <SheetDescription>

                </SheetDescription>
            </SheetHeader>
            
        </SheetContent>
    </Sheet>
  )
}

export default MobileMenu