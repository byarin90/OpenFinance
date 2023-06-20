import { Disclosure } from '@headlessui/react';
import {  useLocation } from 'react-router-dom';
import DesktopNavigate from './components/desktopNavigate';
import AvatarNavigation from './components/avatarNavigation';
import MobileNavigation from './components/mobileNavigation';
import { Bars2Icon, XMarkIcon } from '@heroicons/react/20/solid';
import useAuth from '../../hooks/useAuth';

export interface INavigation {
  name: string;
  href: string;
  current: boolean;
}

export interface IAvatarNavigate {
  name: string;
  href: string;
}


const isActive = (pathname: string, href: string) => {
  return pathname === href;
}
function classNames(...classes: string[]): string {
    return classes.filter(Boolean).join(' ');
  }
  

export const Header = () => {
  const {pathname} = useLocation()
  const {session,link_token} = useAuth()
  
  const avatarNavigate: IAvatarNavigate[] = [
    { name:link_token? 'Launch Link':'backend not found', href: '/launch_link' }
  ];

  const userAvatarNavigate: IAvatarNavigate[] = [
    { name: 'Logout', href: '/logout' }
  ]

  const navigation: INavigation[] = [
    { name: 'Home', href: '/', current: isActive(pathname,'/') }
  ];
 
  const userNavigation: INavigation[] = [
    { name: 'Home', href: '/', current: isActive(pathname,'/') },
    { name: 'Transactions', href: '/transactions', current: isActive(pathname,'/transactions') }

  ];

  
  

  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars2Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              {/* Desktop nav */}
              <DesktopNavigate classNames={classNames} navgation={session ? userNavigation: navigation} />
              <AvatarNavigation
                navigation={session?userAvatarNavigate: avatarNavigate}
                classNames={classNames}
              />
            </div>
          </div>
          {/* Render Navigate for Mobile */}
          <MobileNavigation navigation={session? userNavigation: navigation} classNames={classNames} />

        </>
      )}
    </Disclosure>
  );
};
