function Dashboard() {
  return (
    <>
      <div class="h-full">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-flex p-8 gap-4">
          <div class="bg-green-700 dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-green-600 dark:border-gray-600 text-white font-medium group">
            <div class="flex justify-center items-center w-14 h-14 bg-white rounded-full ">
              <svg width="30" height="30" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="stroke-current text-gray-800 dark:text-gray-800 "><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
            </div>
            <div class="text-right">
              <p class="text-2xl">1,257</p>
              <p>Students Contacted</p>
            </div>
          </div>
          <div class="bg-green-700 dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-green-600 dark:border-gray-600 text-white font-medium group">
            <div class="flex justify-center items-center w-14 h-14 bg-white rounded-full ">
              <svg width="30" height="30" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="stroke-current text-gray-800 dark:text-gray-800 "><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path></svg>
            </div>
            <div class="text-right">
              <p class="text-2xl">723</p>
              <p>Doors Knocked</p>
            </div>
          </div>
          <div class="bg-green-700 dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-green-600 dark:border-gray-600 text-white font-medium group">
            <div class="flex justify-center items-center w-14 h-14 bg-white rounded-full ">
              <svg width="30" height="30" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="stroke-current text-gray-800 dark:text-gray-800 "><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
            <div class="text-right">
              <p class="text-2xl">200</p>
              <p>PTV Signups</p>
            </div>

          </div>
          <div class="bg-green-700 dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-green-600 dark:border-gray-600 text-white font-medium group">
            <div class="flex justify-center items-center w-14 h-14 bg-white rounded-full ">
              <svg width="30" height="30" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="stroke-current text-gray-800 dark:text-gray-800 "><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
            </div>
            <div class="text-right">
              <p class="text-2xl">67</p>
              <p>PTE Signups
              </p>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 w-flex p-8 gap-4">


          <div class="relative flex flex-col min-w-0 mb-4 lg:mb-0 break-words bg-gray-50 dark:bg-gray-800 w-full shadow-lg rounded">


            <div class="rounded-t mb-0 px-0 border-0">
              <div class="flex flex-wrap items-center px-4 py-2">
                <div class="relative w-full max-w-full flex-grow flex-1">
                  <h3 class="font-semibold text-base text-gray-900 dark:text-gray-50">Current Campaign: IN & OH GOTV </h3>
                </div>
                <div class="relative w-full max-w-full flex-grow flex-1 text-right">
                  <button class="bg-blue-500 dark:bg-gray-100 text-white active:bg-blue-600 dark:text-gray-800 dark:active:text-gray-700 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">See all</button>
                </div>
              </div>
            </div>

            <div class="block w-full overflow-x-auto">
              <table class="items-center w-full bg-transparent border-collapse">
                <thead>
                  <tr>
                    <th class="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Name - Position</th>
                    <th class="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Contacts</th>
                    <th class="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left min-w-140-px">Status</th>
                  </tr>
                </thead>

                <tbody>
                  <tr class="text-gray-700 dark:text-gray-100">
                    <th class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">Mallory Rogers - Organzing Director</th>
                    <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">522</td>
                    <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <div class="flex items-center">
                        <span class="mr-2">70%</span>
                        <div class="relative w-full">
                          <div class="overflow-hidden h-2 text-xs flex rounded bg-blue-200">
                            <div style={{ width: '70%' }} class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-600"></div>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr class="text-gray-700 dark:text-gray-100">
                    <th class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">Ava Pallota - Organizing Director</th>
                    <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">280</td>
                    <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <div class="flex items-center">
                        <span class="mr-2">40%</span>
                        <div class="relative w-full">
                          <div class="overflow-hidden h-2 text-xs flex rounded bg-blue-200">
                            <div style={{ width: '40%' }} class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr class="text-gray-700 dark:text-gray-100">
                    <th class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">Pratyush Mallick - Co-Chair</th>
                    <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">20</td>
                    <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <div class="flex items-center">
                        <span class="mr-2">45%</span>
                        <div class="relative w-full">
                          <div class="overflow-hidden h-2 text-xs flex rounded bg-pink-200">
                            <div style={{ width: '45%' }} class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-pink-500"></div>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr class="text-gray-700 dark:text-gray-100">
                    <th class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">Jackson Ward - House Captain</th>
                    <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">42</td>
                    <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <div class="flex items-center">
                        <span class="mr-2">60%</span>
                        <div class="relative w-full">
                          <div class="overflow-hidden h-2 text-xs flex rounded bg-red-200">
                            <div style={{ width: '60%' }} class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"></div>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr class="text-gray-700 dark:text-gray-100">
                    <th class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">Vivian Thai - House Captain</th>
                    <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">220</td>
                    <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <div class="flex items-center">
                        <span class="mr-2">30%</span>
                        <div class="relative w-full">
                          <div class="overflow-hidden h-2 text-xs flex rounded bg-blue-200">
                            <div style={{ width: '30%' }} class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-700"></div>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>


              </table>
            </div>
            <div class="relative flex flex-col min-w-0 mb-4 lg:mb-0 break-words bg-gray-50 dark:bg-gray-800 w-full shadow-lg rounded">









            </div>







          </div>
          <div class="relative flex flex-col min-w-0 mb-4 lg:mb-0 break-words bg-gray-50 dark:bg-gray-800 w-full shadow-lg rounded">


            <div class="rounded-t mb-0 px-0 border-0">
              <div class="flex flex-wrap items-center px-4 py-2">
                <div class="relative w-full max-w-full flex-grow flex-1">
                  <h3 class="font-semibold text-base text-gray-900 dark:text-gray-50">GOTV Calendar </h3>
                </div>
                <div class="relative w-full max-w-full flex-grow flex-1 text-right">
                  <button class="bg-blue-500 dark:bg-gray-100 text-white active:bg-blue-600 dark:text-gray-800 dark:active:text-gray-700 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">Upcoming Elections</button>
                </div>
                <div class="block w-full overflow-x-auto">
                  <div class='flex items-center justify-center h-80'>
                    <div class='w-full max-w-lg p-6 mx-auto bg-white rounded-2xl shadow-xl flex flex-col'>
                      <div class="flex justify-between pb-4">
                        <div class="-rotate-90 cursor-pointer">
                          <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.001 6L6.00098 1L1.00098 6" stroke="black" stroke-opacity="0.4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                          </svg>
                        </div>
                        <span class="uppercase text-sm font-semibold text-gray-600">january - 2022</span>
                        <div class="rotate-90 cursor-pointer">
                          <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.001 6L6.00098 1L1.00098 6" stroke="black" stroke-opacity="0.4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                          </svg>
                        </div>

                      </div>
                      <div class="flex justify-between font-medium uppercase text-xs pt-4 pb-2 border-t">

                        <div class="px-3 border rounded-sm w-14 h-5 flex items-center justify-center border-red-500 text-red-500 shadow-md">
                          sun
                        </div>


                        <span class="px-3 border rounded-sm w-14 h-5 flex items-center justify-center border-green-500 text-green-500 shadow-md">
                          mon
                        </span>


                        <span class="px-3 border rounded-sm w-14 h-5 flex items-center justify-center border-green-500 text-green-500 shadow-md">
                          tue
                        </span>


                        <span class="px-3 border rounded-sm w-14 h-5 flex items-center justify-center border-green-500 text-green-500 shadow-md">
                          wed
                        </span>


                        <span class="px-3 border rounded-sm w-14 h-5 flex items-center justify-center border-green-500 text-green-500 shadow-md">
                          thu
                        </span>


                        <span class="px-3 border rounded-sm w-14 h-5 flex items-center justify-center border-green-500 text-green-500 shadow-md">
                          fri
                        </span>


                        <span class="px-3 border rounded-sm w-14 h-5 flex items-center justify-center border-green-500 text-green-500 shadow-md">
                          sat
                        </span>

                      </div>

                      <div class="flex justify-between font-medium text-sm pb-2">

                        <span class="px-1 text-gray-400 w-14 flex justify-center items-center">
                          30
                        </span>


                        <span class="px-1 text-gray-400 w-14 flex justify-center items-center">
                          31
                        </span>


                        <span class="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer">
                          01
                        </span>


                        <span class="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer">
                          02
                        </span>


                        <span class="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer">
                          03
                        </span>


                        <span class="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer">
                          04
                        </span>


                        <span class="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer">
                          05
                        </span>

                      </div>
                      <div class="flex justify-between font-medium text-sm pb-2">

                        <span class="px-1 w-14 flex justify-center items-center border border-red-500 text-red-500 cursor-pointer">
                          06
                        </span>


                        <span class="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer">
                          07
                        </span>


                        <span class="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer">
                          08
                        </span>


                        <span class="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer">
                          09
                        </span>


                        <span class="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer">
                          10
                        </span>


                        <span class="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer">
                          11
                        </span>


                        <span class="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer">
                          12
                        </span>

                      </div>

                      <div class="flex justify-between font-medium text-sm pb-2">

                        <span class="px-1 w-14 flex justify-center items-center border border-red-500 text-red-500 cursor-pointer">
                          13
                        </span>


                        <span class="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer">
                          14
                        </span>


                        <span class="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer">
                          15
                        </span>


                        <span class="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer">
                          16
                        </span>


                        <span class="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer">
                          17
                        </span>


                        <span class="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer">
                          18
                        </span>


                        <span class="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer">
                          19
                        </span>

                      </div>

                      <div class="flex justify-between font-medium text-sm pb-2">

                        <span class="px-1 w-14 flex justify-center items-center border border-red-500 text-red-500 cursor-pointer">
                          20
                        </span>


                        <span class="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer">
                          21
                        </span>


                        <span class="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer">
                          22
                        </span>


                        <span class="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer">
                          23
                        </span>


                        <span class="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer">
                          24
                        </span>


                        <span class="px-1 w-14 flex justify-center items-center border border-green-500 text-white bg-green-500 rounded-2xl cursor-pointer shadow-md">
                          25
                        </span>


                        <span class="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer">
                          26
                        </span>

                      </div>

                      <div class="flex justify-between font-medium text-sm pb-2">

                        <span class="px-1 w-14 flex justify-center items-center border border-red-500 text-red-500 cursor-pointer">
                          27
                        </span>


                        <span class="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer">
                          28
                        </span>


                        <span class="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer">
                          29
                        </span>


                        <span class="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer">
                          30
                        </span>


                        <span class="px-1 text-gray-400 w-14 flex justify-center items-center">
                          01
                        </span>


                        <span class="px-1 text-gray-400 w-14 flex justify-center items-center">
                          02
                        </span>


                        <span class="px-1 text-gray-400 w-14 flex justify-center items-center">
                          03
                        </span>

                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>


      </div>
    </>
  );
}

export default Dashboard;