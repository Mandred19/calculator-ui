import { Menu, Transition } from '@headlessui/react';
import React, { FC, Fragment, ReactElement, MouseEvent } from 'react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import classNames from 'classnames';
import { Locale, LocaleContext } from '../../Providers/LocaleContext.provider';
import { useTranslation } from 'react-i18next';

const ChangeLanguage: FC = (): ReactElement => {
  const { i18n } = useTranslation(['common']);

  return (
    <LocaleContext.Consumer>
      {
        ({currentLocale, setCurrentLocale}) => {
          const localeItemHandler = async (e: MouseEvent<HTMLElement>, newLocale: Locale): Promise<void> => {
            e.preventDefault();

            if (currentLocale !== newLocale) {
              setCurrentLocale(newLocale);
              await i18n.changeLanguage(newLocale);
            }
          };

          return <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className={`
              inline-flex
              w-full
              justify-center
              rounded-md
              border
              border-gray-300
              bg-white
              px-4 py-2
              text-sm
              font-medium
              text-gray-700
              shadow-sm
              hover:bg-gray-50
              focus:outline-none
              focus:ring-2
              focus:ring-indigo-500
              focus:ring-offset-2
              focus:ring-offset-gray-100
              `}>
                Language
                <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95">
              <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href={Locale.EN_US}
                        onClick={(e) => localeItemHandler(e, Locale.EN_US)}
                        className={classNames(
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                          'block px-4 py-2 text-sm'
                        )}>
                        English
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href={Locale.RU_RU}
                        onClick={(e) => localeItemHandler(e, Locale.RU_RU)}
                        className={classNames(
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                          'block px-4 py-2 text-sm'
                        )}>
                        Русский
                      </a>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>;
        }
      }
    </LocaleContext.Consumer>
  );
};

export default ChangeLanguage;