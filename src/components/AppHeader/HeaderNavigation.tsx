import React, { FC, ReactElement } from 'react';

const HeaderNavigation: FC = (): ReactElement => {
  const [currentTab, setCurrentTab] = React.useState(1);

  return (
    <div className={'flex flex-wrap'}>
      <div className={'w-ful'}>
        <ul className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row" role="tablist">
          <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
            <a
              className={
                'text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal ' +
                (currentTab === 1
                  ? 'text-white bg-' + 'red' + '-600'
                  : 'text-' + 'red' + '-600 bg-white')
              }
              onClick={e => {
                e.preventDefault();
                setCurrentTab(1);
              }}
              data-toggle="tab"
              href="#link1"
              role="tablist">
              <i className="fas fa-space-shuttle text-base mr-1"></i>
              Profile
            </a>
          </li>
          <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
            <a
              className={
                'text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal ' +
                (currentTab === 2
                  ? 'text-white bg-' + 'red' + '-600'
                  : 'text-' + 'red' + '-600 bg-white')
              }
              onClick={e => {
                e.preventDefault();
                setCurrentTab(2);
              }}
              data-toggle="tab"
              href="#link2"
              role="tablist">
              <i className="fas fa-cog text-base mr-1"></i>
              Settings
            </a>
          </li>
          <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
            <a
              className={
                'text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal ' +
                (currentTab === 3
                  ? 'text-white bg-' + 'red' + '-600'
                  : 'text-' + 'red' + '-600 bg-white')
              }
              onClick={e => {
                e.preventDefault();
                setCurrentTab(3);
              }}
              data-toggle="tab"
              href="#link3"
              role="tablist">
              <i className="fas fa-briefcase text-base mr-1"></i>
              Options
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderNavigation;
