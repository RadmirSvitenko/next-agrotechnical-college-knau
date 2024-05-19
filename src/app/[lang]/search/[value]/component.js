'use client';

import React, { useCallback, useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { API } from '@/requester';

const SearchResult = ({ dict }) => {
  const [searchValue, setSearchValue] = useState([]);
  const { value, lang } = useParams();

  const router = useRouter();

  const handleGetDataSearch = useCallback(async () => {
    const response = await API.get(`api/search/${lang}/?query=${value}`);
    const data = await response.data;
    setSearchValue(data);
  }, [value]);

  const toDetails = (path, id) => {
    router.push(`/${lang}/${path}/${id}`);
  };

  useEffect(() => {
    handleGetDataSearch();
  }, [handleGetDataSearch]);

  return (
    <div
      className={
        'flex flex-wrap min-h-screen items-start sm:items-center justify-evenly gap-[40px] pt-[54px] px-[120px] pb-[50px] sm:flex sm:flex-col sm:py-[40px] sm:px-[16px] sm:gap-[20px] bg-[#E5F0FA] relative sm:bg-[#E5F0FA]'
      }
    >
      {/* поиск по проекта */}

      {searchValue &&
        searchValue.project &&
        searchValue.project.length > 0 &&
        searchValue.project.map((document) => (
          <div
            className={
              'z-20 cursor-pointer h-auto flex sm:px-4 sm:justify-center pt-[54px] sm:py-[40px]'
            }
            key={document.id}
          >
            <div className={'flex flex-col gap-7 rounded-xl p-5 bg-[#FCFCFD]'}>
              <h3
                onClick={() => toDetails('projects', document.id)}
                className={
                  'text-[#128DFF] hover:underline font-[700] text-[22px]'
                }
              >
                {document?.[`name_${lang}`]}
              </h3>
              <div
                className={
                  'flex z-10 gap-[40px] sm:flex justify-evenly sm:justify-center sm:flex-col flex-wrap'
                }
              >
                {document?.documents?.map((doc) => (
                  <a
                    href={doc?.file}
                    download={doc?.[`description_${lang}`]}
                    key={doc.id}
                  >
                    <div
                      className={
                        'flex flex-col border-[1px]  border-[#E6E8EC] rounded-md px-4 gap-8 w-[300px] sm:w-auto sm:max-w-[250px] h-[340px] items-start'
                      }
                    >
                      <img
                        src="/document-preview.png"
                        alt="test"
                        className={'sm:w-full z-10 h-[210px]'}
                      />

                      <div
                        className={'flex w-full items-start justify-between'}
                      >
                        <div className={'flex flex-col gap-[10px]'}>
                          <span
                            className={
                              'font-[600] w-64 sm:w-32 truncate overflow-ellipsis text-[18px] text-[#282828]'
                            }
                          >
                            {doc?.[`description_${lang}`]}
                          </span>
                          <span
                            className={'font-[400] text-[14px] text-[#5F6980]'}
                          >
                            {doc?.created_at}
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}

      {/* поиск по тендерам */}

      {searchValue && searchValue.tenders && searchValue.tenders.length > 0 && (
        <div
          className={
            'flex w-full flex-wrap rounded-xl flex-col gap-5 p-5 bg-[#FCFCFD]'
          }
        >
          <h3 className={'text-[#128DFF] font-[700] text-[22px] text-wrap'}>
            {dict?.totalSearch?.tenders}
          </h3>
          {searchValue?.tenders?.map((tender) => (
            <div
              className={`z-20 h-auto ${searchValue?.tenders?.length <= 2
                ? 'justify-start'
                : 'justify-evenly'
                }  items-start flex flex-wrap sm:px-4 sm:justify-center sm:py-[40px]`}
              key={tender.id}
            >
              <div
                className={
                  'flex z-10 gap-[40px] sm:flex flex-start flex-col box-border sm:justify-center sm:flex-col flex-wrap text-wrap'
                }
              >
                <p
                  onClick={() => toDetails('tenders', tender.id)}
                  className={
                    'text-[#128DFF]  font-[550] text-[16px] hover:cursor-pointer hover:underline text-wrap'
                  }
                >
                  {tender?.[`name_${lang}`]}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* поиск по новостям */}

      {searchValue && searchValue.news && searchValue.news.length > 0 && (
        <div
          className={'flex w-full rounded-xl flex-col gap-7 p-5 bg-[#FCFCFD]'}
        >
          <h3 className={'text-[#128DFF]  font-[700] text-[22px]'}>Новости</h3>
          {searchValue?.news?.map((event) => (
            <div
              className={`z-20 h-auto ${searchValue?.tenders?.length <= 2
                ? 'justify-start'
                : 'justify-evenly'
                }  items-start flex sm:px-4 sm:justify-center sm:py-[40px]`}
              key={event.id}
            >
              <div
                onClick={() => toDetails('news', event.id)}
                className={
                  'flex z-10 w-[250px] gap-3 text-wrap sm:flex flex-start flex-col sm:justify-center sm:flex-col flex-wrap'
                }
              >
                <img
                  src={event?.photo}
                  alt={event?.[`title_${lang}`]}
                  className={'w-[250px] hover:cursor-pointer rounded-xl'}
                />

                <p
                  className={
                    'text-[#000] font-[600] text-[12px] hover:cursor-pointer hover:underline'
                  }
                >
                  {event?.[`title_${lang}`]}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResult;