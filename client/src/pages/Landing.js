import { useLayoutEffect } from "react";

function Landing() {

    useLayoutEffect(() => {
        // window.scrollTo(0, 0);
    });

    return (
        <div>

            {/* Top section */}
            <div className="bg-white max-w-screen-2xl flex flex-col items-center mr-auto ml-auto pt-16 pr-4 pb-16 pl-4
   relative lg:flex-row lg:py-32 xl:py-48 md:px-8">
                <div className="flex w-full h-full justify-center items-center lg:w-1/2 lg:justify-end lg:bottom-0 lg:left-0
	lg:items-center"><img src="https://i.ibb.co/x2vnCQc/VOTEABLE-1080-1080-px-2.png" className="h-auto w-full object-contain object-top lg:w-auto
	lg:h-full" /></div>
                <div className="flex justify-end mr-auto ml-auto relative max-w-xl xl:pr-32 lg:max-w-screen-xl">
                    <div className="mb-16 lg:pr-5 lg:max-w-lg lg:mb-0">
                        <div className="mb-6 max-w-xl">
                            <p className="inline-block font-semibold text-xs tracking-wider mb-4 pt-1 pr-3 pb-1 pl-3 uppercase
	   bg-green-700 text-gray-200 rounded-2xl">Voteable</p>
                            <div className="text-gray-900 mb-6 max-w-lg sm:text-4xl sm:leading-none">
                                <p className="inline-block font-bold text-3xl tracking-tight text-green-700 sm:text-4xl
		sm:leading-none">Reimagine Campus Organizing</p>
                            </div>
                            <p className="text-base text-gray-700 md:text-lg">Votable is the only campus-first peer-to-peer relational organizing tool, helping student organizers initiate contact with voters across campus and enabling students to use interactive features to request election information.
                                If you're interested in partnering with us or exploring our product, submit your email below!
                            </p>
                        </div>
                        <div className="flex flex-col md:flex-row"><input type="text" id="03176e36-e060-489e-8702-e2e496eb5503" className="h-12
	  w-full rounded-md mb-2 pt-3 pr-4 pb-3 pl-4 text-sm font-normal shadow-sm border-1 bg-white text-black
	  border-gray-300 md:mr-2 focus:border-green-700 focus:outline-none focus:shadow-outline flex-grow transition
	  duration-200 appearance-none" placeholder="Email Address" /></div>
                        <div className="flex items-center mt-4"><button className="h-12 rounded-md mr-6 pr-6 pl-6
	  text-medium font-semibold tracking-wide shadow-md inline-flex items-center justify-center bg-green-700 text-white
	  transition duration-200 hover:bg-green-900 focus:shadow-outline focus:outline-none" style={{ fontFamily: 'Arial' }}>Get
                            Early Access</button><button className="h-12 rounded-md mr-6 pr-6 pl-6 text-medium
	  font-semibold tracking-wide shadow-md border border-gray-100 inline-flex items-center justify-center bg-transparent text-green-700
	  transition duration-200 hover:bg-green-50 focus:shadow-outline focus:outline-none" style={{ fontFamily: 'Arial' }}>Request a Demo</button></div>
                    </div>
                </div>
            </div>

            {/* Features */}
            <section className="py-24 md:pb-32 bg-white border-t border-gray-200" style={{ backgroundImage: 'url("flex-ui-assets/elements/pattern-white.svg")', backgroundPosition: 'center' }}>
                <div className="container px-4 mx-auto">
                    <div className="md:max-w-4xl mb-12 mx-auto text-center">
                        <span className="inline-block py-px px-2 mb-4 text-xs leading-5 text-green-500 bg-green-100 font-medium uppercase rounded-full shadow-sm">Features</span>
                        <h1 className="mb-4 text-3xl md:text-4xl leading-tight font-bold tracking-tighter">Engage students and faculty across campus</h1>
                        <p className="text-lg md:text-xl text-coolGray-500 font-medium">With our relational organizing powered solution, you can coordinate every aspect of the Get Out the Vote process all in one consolidated platform.</p>
                    </div>
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full md:w-1/2 lg:w-1/3 px-4">
                            <div className="h-full p-8 text-center hover:bg-white rounded-md hover:shadow-xl transition duration-200">
                                <div className="inline-flex h-16 w-16 mb-6 mx-auto items-center justify-center text-white bg-green-700 rounded-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                                    </svg>
                                </div>
                                <h3 className="mb-4 text-xl md:text-2xl leading-tight font-bold">Manage Student Data</h3>
                                <p className="text-coolGray-500 font-medium">Extensive capabilities to process, edit, import, and export student information.</p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/3 px-4">
                            <div className="h-full p-8 text-center hover:bg-white rounded-md hover:shadow-xl transition duration-200">
                                <div className="inline-flex h-16 w-16 mb-6 mx-auto items-center justify-center text-white bg-green-700 rounded-lg">
                                    <svg width={22} height={12} viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20.71 1.29C20.617 1.19627 20.5064 1.12188 20.3846 1.07111C20.2627 1.02034 20.132 0.994202 20 0.994202C19.868 0.994202 19.7373 1.02034 19.6154 1.07111C19.4936 1.12188 19.383 1.19627 19.29 1.29L13 7.59L8.71 3.29C8.61704 3.19627 8.50644 3.12188 8.38458 3.07111C8.26272 3.02034 8.13201 2.9942 8 2.9942C7.86799 2.9942 7.73728 3.02034 7.61542 3.07111C7.49356 3.12188 7.38296 3.19627 7.29 3.29L1.29 9.29C1.19627 9.38296 1.12188 9.49356 1.07111 9.61542C1.02034 9.73728 0.994202 9.86799 0.994202 10C0.994202 10.132 1.02034 10.2627 1.07111 10.3846C1.12188 10.5064 1.19627 10.617 1.29 10.71C1.38296 10.8037 1.49356 10.8781 1.61542 10.9289C1.73728 10.9797 1.86799 11.0058 2 11.0058C2.13201 11.0058 2.26272 10.9797 2.38458 10.9289C2.50644 10.8781 2.61704 10.8037 2.71 10.71L8 5.41L12.29 9.71C12.383 9.80373 12.4936 9.87812 12.6154 9.92889C12.7373 9.97966 12.868 10.0058 13 10.0058C13.132 10.0058 13.2627 9.97966 13.3846 9.92889C13.5064 9.87812 13.617 9.80373 13.71 9.71L20.71 2.71C20.8037 2.61704 20.8781 2.50644 20.9289 2.38458C20.9797 2.26272 21.0058 2.13201 21.0058 2C21.0058 1.86799 20.9797 1.73728 20.9289 1.61542C20.8781 1.49356 20.8037 1.38296 20.71 1.29Z" fill="currentColor" />
                                    </svg>
                                </div>
                                <h3 className="mb-4 text-xl md:text-2xl leading-tight font-bold">Analyze Outreach Efforts</h3>
                                <p className="text-coolGray-500 font-medium">Get a complete voter status dashboard in the cloud. See activity, engagement and insights on voter turnout all in one place.</p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/3 px-4">
                            <div className="h-full p-8 text-center hover:bg-white rounded-md hover:shadow-xl transition duration-200">
                                <div className="inline-flex h-16 w-16 mb-6 mx-auto items-center justify-center text-white bg-green-700 rounded-lg">
                                    <svg width={22} height={18} viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.3 9.22C11.8336 8.75813 12.2616 8.18688 12.5549 7.54502C12.8482 6.90316 13 6.20571 13 5.5C13 4.17392 12.4732 2.90215 11.5355 1.96447C10.5979 1.02678 9.32608 0.5 8 0.5C6.67392 0.5 5.40215 1.02678 4.46447 1.96447C3.52678 2.90215 3 4.17392 3 5.5C2.99999 6.20571 3.1518 6.90316 3.44513 7.54502C3.73845 8.18688 4.16642 8.75813 4.7 9.22C3.30014 9.85388 2.11247 10.8775 1.27898 12.1685C0.445495 13.4596 0.00147185 14.9633 0 16.5C0 16.7652 0.105357 17.0196 0.292893 17.2071C0.48043 17.3946 0.734784 17.5 1 17.5C1.26522 17.5 1.51957 17.3946 1.70711 17.2071C1.89464 17.0196 2 16.7652 2 16.5C2 14.9087 2.63214 13.3826 3.75736 12.2574C4.88258 11.1321 6.4087 10.5 8 10.5C9.5913 10.5 11.1174 11.1321 12.2426 12.2574C13.3679 13.3826 14 14.9087 14 16.5C14 16.7652 14.1054 17.0196 14.2929 17.2071C14.4804 17.3946 14.7348 17.5 15 17.5C15.2652 17.5 15.5196 17.3946 15.7071 17.2071C15.8946 17.0196 16 16.7652 16 16.5C15.9985 14.9633 15.5545 13.4596 14.721 12.1685C13.8875 10.8775 12.6999 9.85388 11.3 9.22ZM8 8.5C7.40666 8.5 6.82664 8.32405 6.33329 7.99441C5.83994 7.66476 5.45542 7.19623 5.22836 6.64805C5.0013 6.09987 4.94189 5.49667 5.05764 4.91473C5.1734 4.33279 5.45912 3.79824 5.87868 3.37868C6.29824 2.95912 6.83279 2.6734 7.41473 2.55764C7.99667 2.44189 8.59987 2.5013 9.14805 2.72836C9.69623 2.95542 10.1648 3.33994 10.4944 3.83329C10.8241 4.32664 11 4.90666 11 5.5C11 6.29565 10.6839 7.05871 10.1213 7.62132C9.55871 8.18393 8.79565 8.5 8 8.5ZM17.74 8.82C18.38 8.09933 18.798 7.20905 18.9438 6.25634C19.0896 5.30362 18.9569 4.32907 18.5618 3.45C18.1666 2.57093 17.5258 1.8248 16.7165 1.30142C15.9071 0.77805 14.9638 0.499742 14 0.5C13.7348 0.5 13.4804 0.605357 13.2929 0.792893C13.1054 0.98043 13 1.23478 13 1.5C13 1.76522 13.1054 2.01957 13.2929 2.20711C13.4804 2.39464 13.7348 2.5 14 2.5C14.7956 2.5 15.5587 2.81607 16.1213 3.37868C16.6839 3.94129 17 4.70435 17 5.5C16.9986 6.02524 16.8593 6.5409 16.5961 6.99542C16.3328 7.44994 15.9549 7.82738 15.5 8.09C15.3517 8.17552 15.2279 8.29766 15.1404 8.44474C15.0528 8.59182 15.0045 8.7589 15 8.93C14.9958 9.09976 15.0349 9.2678 15.1137 9.41826C15.1924 9.56872 15.3081 9.69665 15.45 9.79L15.84 10.05L15.97 10.12C17.1754 10.6917 18.1923 11.596 18.901 12.7263C19.6096 13.8566 19.9805 15.1659 19.97 16.5C19.97 16.7652 20.0754 17.0196 20.2629 17.2071C20.4504 17.3946 20.7048 17.5 20.97 17.5C21.2352 17.5 21.4896 17.3946 21.6771 17.2071C21.8646 17.0196 21.97 16.7652 21.97 16.5C21.9782 14.9654 21.5938 13.4543 20.8535 12.1101C20.1131 10.7659 19.0413 9.63331 17.74 8.82Z" fill="currentColor" />
                                    </svg>
                                </div>
                                <h3 className="mb-4 text-xl md:text-2xl leading-tight font-bold">Create Custom Campaigns</h3>
                                <p className="text-coolGray-500 font-medium">Write customized scripts to specifically target student populations using script builder features.</p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/3 px-4">
                            <div className="h-full p-8 text-center hover:bg-white rounded-md hover:shadow-xl transition duration-200">
                                <div className="inline-flex h-16 w-16 mb-6 mx-auto items-center justify-center text-white bg-green-700 rounded-lg">
                                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 18H9.24C9.37161 18.0008 9.50207 17.9755 9.62391 17.9258C9.74574 17.876 9.85656 17.8027 9.95 17.71L16.87 10.78L19.71 8C19.8037 7.90704 19.8781 7.79644 19.9289 7.67458C19.9797 7.55272 20.0058 7.42201 20.0058 7.29C20.0058 7.15799 19.9797 7.02728 19.9289 6.90542C19.8781 6.78356 19.8037 6.67296 19.71 6.58L15.47 2.29C15.377 2.19627 15.2664 2.12188 15.1446 2.07111C15.0227 2.02034 14.892 1.9942 14.76 1.9942C14.628 1.9942 14.4973 2.02034 14.3754 2.07111C14.2536 2.12188 14.143 2.19627 14.05 2.29L11.23 5.12L4.29 12.05C4.19732 12.1434 4.12399 12.2543 4.07423 12.3761C4.02446 12.4979 3.99924 12.6284 4 12.76V17C4 17.2652 4.10536 17.5196 4.29289 17.7071C4.48043 17.8946 4.73478 18 5 18ZM14.76 4.41L17.59 7.24L16.17 8.66L13.34 5.83L14.76 4.41ZM6 13.17L11.93 7.24L14.76 10.07L8.83 16H6V13.17ZM21 20H3C2.73478 20 2.48043 20.1054 2.29289 20.2929C2.10536 20.4804 2 20.7348 2 21C2 21.2652 2.10536 21.5196 2.29289 21.7071C2.48043 21.8946 2.73478 22 3 22H21C21.2652 22 21.5196 21.8946 21.7071 21.7071C21.8946 21.5196 22 21.2652 22 21C22 20.7348 21.8946 20.4804 21.7071 20.2929C21.5196 20.1054 21.2652 20 21 20Z" fill="currentColor" />
                                    </svg>
                                </div>
                                <h3 className="mb-4 text-xl md:text-2xl leading-tight font-bold">Generate Targeted Turfs</h3>
                                <p className="text-coolGray-500 font-medium">Target outreach by state, class year, residential location and more with custom turfs.</p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/3 px-4">
                            <div className="h-full p-8 text-center hover:bg-white rounded-md hover:shadow-xl transition duration-200">
                                <div className="inline-flex h-16 w-16 mb-6 mx-auto items-center justify-center text-white bg-green-700 rounded-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <h3 className="mb-4 text-xl md:text-2xl leading-tight font-bold">Coordinate Campus Organizers</h3>
                                <p className="text-coolGray-500 font-medium">End-to-end calendar, deliverable, and task-management system built into Votable.</p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/3 px-4">
                            <div className="h-full p-8 text-center hover:bg-white rounded-md hover:shadow-xl transition duration-200">
                                <div className="inline-flex h-16 w-16 mb-6 mx-auto items-center justify-center text-white bg-green-700 rounded-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                    </svg>
                                </div>
                                <h3 className="mb-4 text-xl md:text-2xl leading-tight font-bold">Communicate Across Campus</h3>
                                <p className="text-coolGray-500 font-medium">Built-in messaging features to communicate to students across campus via text, email, and more.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom card */}
            <div className="bg-gray-100 w-full pt-20">
                <div className="mt-8 pb-16 sm:mt-12 sm:pb-20 lg:pb-28">
                    <div className="relative">
                        <div className="absolute inset-0 h-1/2" />
                        <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="max-w-lg mx-auto rounded-lg shadow-lg overflow-hidden lg:max-w-none lg:flex">
                                <div className="bg-white px-6 py-8 lg:flex-shrink-1 lg:p-12">
                                    <h3 className="text-2xl leading-8 font-extrabold text-gray-900 sm:text-3xl sm:leading-9">
                                        Interested in bringing Voteable to your campus
                                    </h3>
                                    <p className="mt-6 text-base leading-6 text-gray-500">
                                        Get access to the premier suite of student-centered relational organizing tools to help get out the vote on your campus.
                                    </p>
                                    <div className="mt-8">
                                        <div className="flex items-center">
                                            <h4 className="flex-shrink-0 pr-4 bg-white text-sm leading-5 tracking-wider font-semibold uppercase text-sky-600">
                                                What's Included
                                            </h4>
                                            <div className="flex-1 border-t-2 border-gray-200" />
                                        </div>
                                        <ul className="mt-8 lg:grid lg:grid-cols-2 lg:col-gap-8 lg:row-gap-5">
                                            <li className="flex items-start lg:col-span-1">
                                                <div className="flex-shrink-0">
                                                    <svg className="h-5 w-5 text-green-700" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                    </svg>
                                                </div>
                                                <p className="ml-3 text-sm leading-5 text-gray-700">
                                                    Unlimited organizers
                                                </p>
                                            </li>
                                            <li className="mt-5 flex items-start lg:col-span-1 lg:mt-0">
                                                <div className="flex-shrink-0">
                                                    <svg className="h-5 w-5 text-green-700" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                    </svg>
                                                </div>
                                                <p className="ml-3 text-sm leading-5 text-gray-700">
                                                    Ability to send emails, texts, and push notifications
                                                </p>
                                            </li>
                                            <li className="mt-5 flex items-start lg:col-span-1 lg:mt-0">
                                                <div className="flex-shrink-0">
                                                    <svg className="h-5 w-5 text-green-700" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                    </svg>
                                                </div>
                                                <p className="ml-3 text-sm leading-5 text-gray-700">
                                                    Built-in administration and scheduling platform
                                                </p>
                                            </li>
                                            <li className="mt-5 flex items-start lg:col-span-1 lg:mt-0">
                                                <div className="flex-shrink-0">
                                                    <svg className="h-5 w-5 text-green-700" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                    </svg>
                                                </div>
                                                <p className="ml-3 text-sm leading-5 text-gray-700">
                                                    Unlimited student and dorm contacts
                                                </p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="py-8 px-6 text-center bg-gray-50 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12">
                                    <div className="mt-4 flex items-center justify-center text-5xl leading-none font-extrabold text-gray-900">
                                        <span>
                                            Contact us
                                        </span>
                                    </div>
                                    <p className="text-lg leading-6 font-medium text-gray-900 pt-2">
                                        for campus-specific quotes
                                    </p>
                                    <div className="mt-6">
                                        <div className="rounded-md shadow">
                                            <a href="mailto:voteschallenge@harvard.edu?subject=Voteable%20Inquiry" className="flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-green-700 hover:bg-gray-800 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
                                                Let's get out the vote!
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Landing;
