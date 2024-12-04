// components/Header/Header.tsx

'use client';

import { Fragment } from 'react';
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const Header: React.FC = () => {
  return (
    <header className="bg-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link
                id="logo"
                href="/"
                className="text-xl font-bold text-sky-600"
              >
                ExpenseTracker
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                id="home"
                href="/dashboard"
                className="border-b-2 border-transparent text-gray-400 hover:border-green-700 hover:text-white inline-flex items-center px-1 pt-1 text-sm font-medium"
              >
                Dashboard
              </Link>
              <Link
                id="expenses"
                href="/expenses"
                className="border-b-2 border-transparent text-gray-400 hover:border-green-700 hover:text-white inline-flex items-center px-1 pt-1 text-sm font-medium"
              >
                Expenses
              </Link>
              <Link
                id="reports"
                href="/reports"
                className="border-b-2 border-transparent text-gray-400 hover:border-green-700 hover:text-white inline-flex items-center px-1 pt-1 text-sm font-medium"
              >
                Reports
              </Link>
              <Link
                id="budgets"
                href="/budgets"
                className="border-b-2 border-transparent text-gray-400 hover:border-green-700 hover:text-white inline-flex items-center px-1 pt-1 text-sm font-medium"
              >
                Budgets
              </Link>
              <Link
                id="categories"
                href="/categories"
                className="border-b-2 border-transparent text-gray-400 hover:border-green-700 hover:text-white inline-flex items-center px-1 pt-1 text-sm font-medium"
              >
                Categories
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <MenuButton className="inline-flex justify-center w-full rounded-md border border-sky-700 shadow-sm px-4 py-2 bg-gray-800 text-sm font-medium text-white  focus:outline-none">
                  Account
                  <ChevronDownIcon
                    className="-mr-1 ml-2 h-5 w-5"
                    aria-hidden="true"
                  />
                </MenuButton>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <MenuItems className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-gray-700 ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <MenuItem>
                      {({ active }) => (
                        <Link
                          href="/dashboard"
                          className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-white',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          Profile
                        </Link>
                      )}
                    </MenuItem>
                    <MenuItem>
                      {({ active }) => (
                        <Link
                          href="/dashboard"
                          className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-white',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          Settings
                        </Link>
                      )}
                    </MenuItem>
                    <MenuItem>
                      {({ active }) => (
                        <Link
                          href="/dashboard"
                          className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-white',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          Sign out
                        </Link>
                      )}
                    </MenuItem>
                  </div>
                </MenuItems>
              </Transition>
            </Menu>
          </div>
        </div>
      </div>

      {/* Mobile Menu (optional) */}
      {/* Implement responsive mobile menu here if needed */}
    </header>
  );
};

export default Header;
