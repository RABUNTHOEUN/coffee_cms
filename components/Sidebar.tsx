import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from '@/components/ui/command';
import {
  LayoutDashboard,
  Newspaper,
  Folders,
  CreditCard,
  Settings,
  User,
} from 'lucide-react';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <Command className='bg-secondary rounded-none'>
      <CommandInput placeholder='Type a command or search...' />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading='Suggestions'>
          <CommandItem>
            <LayoutDashboard className='mr-4 h-4 w-4' />
            <Link className='text-lg font-semibold' href='/'>Dashboard</Link>
          </CommandItem>
          <CommandItem>
            <User className='mr-4 h-4 w-4' />
            <Link className='text-lg font-semibold' href='/users'>Users</Link>
          </CommandItem>
          <CommandItem>
            <Folders className='mr-4 h-4 w-4' />
            <Link className='text-lg font-semibold' href='categories'>Categories</Link>
          </CommandItem>
          <CommandItem>
            <Newspaper className='mr-4 h-4 w-4' />
            <Link className='text-lg font-semibold' href='/products'>Products</Link>
          </CommandItem>
          <CommandItem>
            <Newspaper className='mr-4 h-4 w-4' />
            <Link className='text-lg font-semibold' href='/orders'>Orders</Link>
          </CommandItem>
          <CommandItem>
            <Newspaper className='mr-4 h-4 w-4' />
            <Link className='text-lg font-semibold' href='/Order_Items'>Order Items</Link>
          </CommandItem>
          <CommandItem>
            <Newspaper className='mr-4 h-4 w-4' />
            <Link className='text-lg font-semibold' href='/payments'>Payments</Link>
          </CommandItem>
          <CommandItem>
            <Newspaper className='mr-4 h-4 w-4' />
            <Link className='text-lg font-semibold' href='/employees'>Employees</Link>
          </CommandItem>
          <CommandItem>
            <Newspaper className='mr-4 h-4 w-4' />
            <Link className='text-lg font-semibold' href='/suppliers'>Suppliers</Link>
          </CommandItem>
          <CommandItem>
            <Newspaper className='mr-4 h-4 w-4' />
            <Link className='text-lg font-semibold' href='/inventory'>Inventory</Link>
          </CommandItem>
          <CommandItem>
            <Newspaper className='mr-4 h-4 w-4' />
            <Link className='text-lg font-semibold' href='/reviews'>Reviews</Link>
          </CommandItem>
          <CommandItem>
            <Newspaper className='mr-4 h-4 w-4' />
            <Link className='text-lg font-semibold' href='/promotions'>Promotions</Link>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading='Settings'>
          <CommandItem className='text-lg font-semibold'>
            <User className='mr-4 h-4 w-4' />
            <span>Profile</span>
            <CommandShortcut>⌘P</CommandShortcut>
          </CommandItem>
          <CommandItem className='text-lg font-semibold'>
            <CreditCard className='mr-4 h-4 w-4' />
            <span>Billing</span>
            <CommandShortcut>⌘B</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <Settings className='mr-4 h-4 w-4' />
            <span>Settings</span>
            <CommandShortcut>⌘S</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
};

export default Sidebar;
