import React, { useEffect, useMemo, useState } from 'react';
import useContries from '../hook/useContries';
import Input from './form/Input';
import { useContext } from 'react';
import AppContext from '../context/app_context';
import { ActionType } from '../context/actions';

interface PropTypes {
  title: string;
  read_only: boolean;
  type: string;
  value: string;
  on_change: React.Dispatch<React.SetStateAction<string>>;
}

export const Currency = (props: PropTypes) => {
  const { dispatch } = useContext(AppContext);

  const { countries } = useContries();
  const countrys = useMemo(() => countries, [countries]);
  const [currentCountry, setCurrentCountry] = useState<any>(countrys[0]);
  const [openSearch, setOpenSearch] = useState(false);
  const [countrySearch, setCountrySearch] = useState([]);

  const [searchInput, setSearchInput] = useState('');
  // const [send, setSend] = useState("");

  useEffect(() => {
    setCurrentCountry(countries[0]);
  }, [countries]);

  useEffect(() => {
    setCountrySearch(
      countrys.filter((country: any) =>
        country?.name?.common.toLowerCase().includes(searchInput)
      )
    );
  }, [countrys, searchInput]);

  const handleCurrentCountry = (name: string) => {
    const index = countrys.findIndex(
      (country: any) => country.name.common === name
    );
    const { currencies } = countrys[index];
    // const currency_abbrev = Object.keys(countrys[index].currencies);
    const currency_abbrev = Object.keys(currencies);

    setCurrentCountry(countrys[index]);
    props.title === 'You send'
      ? dispatch({
          type: ActionType.SET_SENDING_COUNTRY,
          payload: currency_abbrev[0],
        })
      : dispatch({
          type: ActionType.SET_RECEIVING_COUNTRY,
          payload: currency_abbrev[0],
        });
    setOpenSearch(prev => !prev);
    setSearchInput('');
  };

  return (
    <div className="w-full md:w-[300px] relative">
      <div className="flex w-full items-center justify-between rounded-md bg-slate-100 pr-3 pl-3">
        <div className="pt-2 pb-[8.5px] w-1/2">
          <div className="pb-1 text-xs text-blue-500">{props.title}</div>
          <Input
            height="h-full"
            width={'w-[100px]'}
            value={props.value}
            onValuechange={props.on_change}
            type={props.type || 'number'}
            required={true}
            read_only={props.read_only}
          />
        </div>
        <div className="h-full w-1/2 flex items-center gap-3 border-l border-black pl-5">
          <img
            src={currentCountry?.flags?.svg}
            className="object-contain w-10 h-5"
            alt={`${currentCountry?.name?.common} flag`}
          />
          <div>{currentCountry?.cca3}</div>
          {openSearch ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-caret-up-fill cursor-pointer"
              viewBox="0 0 16 16"
              onClick={() => setOpenSearch(prev => !prev)}
            >
              <path d="M7.247 4.86l-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-caret-down-fill cursor-pointer"
              viewBox="0 0 16 16"
              onClick={() => setOpenSearch(prev => !prev)}
            >
              <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
            </svg>
          )}
        </div>
      </div>
      {openSearch && (
        <div className="absolute w-full z-20 bg-slate-100 p-3 mt-1 rounded-md">
          <Input
            height={'h-10'}
            type="text"
            value={searchInput}
            onValuechange={setSearchInput}
            width={'w-full'}
            required={false}
            read_only={false}
          />
          <div
            className="max-h-[200px] min-h-fit overflow-y-scroll scrollbar-thin"
            style={styles}
          >
            {countrySearch.length > 0 ? (
              countrySearch.map((country: any) => (
                <div
                  key={country['name']['common']}
                  className="mt-3 cursor-pointer rounded bg-slate-200 hover:bg-slate-300 h-10 pl-3 flex items-center gap-5"
                  onClick={() =>
                    handleCurrentCountry(country['name']['common'])
                  }
                >
                  <img
                    className="w-10 h-5"
                    src={country['flags']['svg']}
                    alt={`${country.name.common} flag`}
                  />
                  <div className="text-xs">{country?.name?.common}</div>
                </div>
              ))
            ) : (
              <div className="mt-3">No Result</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

const styles: React.CSSProperties = {
  scrollbarWidth: 'none',
};
