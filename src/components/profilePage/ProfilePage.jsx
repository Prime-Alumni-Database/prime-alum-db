import Navigate from "react-router-dom"
import Datepicker from 'flowbite-datepicker/Datepicker';
import DateRangePicker from 'flowbite-datepicker/DateRangePicker';
import { useDropzone } from "react-dropzone"

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";

function ProfilePage() {


    const dispatch = useDispatch()
    const Dropzone = useDropzone()
  
    const [isTrue, SetTruth] = useState(false)
    const [currentStack, setCurrentStack] = useState([])

    const [knownStack, setKnownStack] = useState([])

    const [uploadedFile, setUploadedFile] = useState();

    const knownStacks = useSelector((store) => store.knownStacks)

    const currentStacks = useSelector((store) => store.currentStacks)

    const profile = useSelector(store => store.profile)
    
    const user = useSelector((store) => store.user);

    console.log('this is current stacks', currentStacks);

    const onDrop = (acceptedFiles) => {
        // Set the first accepted file as the uploaded file
        setUploadedFile(acceptedFiles[0]);
        console.log('this is the uploaded file', uploadedFile);
        setTrue()

    };

    useEffect(() => {
        // This effect runs whenever `myImage` changes
        if (uploadedFile) {
            // Perform any necessary actions when the image changes

            dispatch({
                type: 'MODIFY_UPLOADED_FILE',
                payload: URL.createObjectURL(uploadedFile)
            })

            console.log('Image changed:', uploadedFile);
            SetTruth(true)
            displayImage()
        }
    }, [uploadedFile]);

    console.log('file--->', uploadedFile);

    const addProfile = (e) => {
        event.preventDefault();

        // dispatchEvent({
        //     type: 'SAGA/ADD_PROFILE',
        //     payload: ?????
        // });

        setUserName('');
        setBio('');
        setTech('');
        setSocials('');
        setJobTitle('');
    }


 

    console.log('this is profile.uploadedFile', profile.uploadedFile);
    const displayImage = () => {

        if (profile.uploadedFile != undefined) {
            return (
                <img className=" w-72 h-56 mt-20  rounded-lg  hover:blur-none" src={profile.uploadedFile} alt="image description"></img>
            )
        } else {
            return (
                <label className="flex flex-col items-center justify-center w-full mt-20 h-10/12 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg aria-hidden="true" className="w-10 h-32 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                    </div>
                    <input {...getInputProps()} id="dropzone-file" type="file" className="hidden" />
                </label>
            )
        }
    }

    const { getRootProps, getInputProps } = useDropzone({ onDrop });

    const handleKeyPress = () => {
        if (event.key === 'Enter') {
            console.log('this is the current stack', currentStack);

            dispatch({
                type: 'SET_CURRENT_STACK',
                payload: currentStack
            })
            setCurrentStack('')
        }
    }

    const handleKnownKeyPress = () => {
        console.log('this is the known stack', knownStack);
        if (event.key === 'Enter') {

            
            dispatch({
                type: 'SET_KNOWN_STACK',
                payload: knownStack
            })
            setKnownStack('')
        }

    }

    const handleUsername = (event) => {
        dispatch({
            type: 'MODIFY_USERNAME',
            payload: event.target.value,
        })
        console.log('this is profile.userName', profile.username);
    }

    const handleFirstName = (event) => {
        dispatch({
            type: 'MODIFY_FIRST_NAME',
            payload: event.target.value,
        })
        console.log('this is profile.firstName', profile.firstName);
    }

    const handleLastName = (event) => {
        dispatch({
            type: 'MODIFY_LAST_NAME',
            payload: event.target.value,
        })
    }

    const handlePronouns = (event) => {
        dispatch({
            type: 'MODIFY_PRONOUNS',
            payload: event.target.value,
        })
    }

    const handleCohort = (event) => {
        dispatch({
            type: 'MODIFY_COHORT',
            payload: event.target.value,
        })
    }

    const handleCurrentWork = (event) => {
        dispatch({
            type: 'MODIFY_CURRENT_WORK',
            payload: event.target.value,
        })
    }

    const handleBio = (event) => {
        dispatch({
            type: 'MODIFY_BIO',
            payload: event.target.value,
        })
    }

    const handleUploadedFile = (event) => {
        dispatch({
            type: 'MODIFY_UPLOADED_FILE',
            payload: event.target.value,
        })
    }

    const handleLinkedIn = (event) => {
        dispatch({
            type: 'MODIFY_LINKED_IN',
            payload: event.target.value,
        })
    }

    const handleGithub = (event) => {
        dispatch({
            type: 'MODIFY_GITHUB',
            payload: event.target.value,
        })
    }

    const handlePortfolio = (event) => {
        dispatch({
            type: 'MODIFY_PORTFOLIO',
            payload: event.target.value,
        })
    }

    const handleStartDate = (event) => {
        dispatch({
            type: 'MODIFY_START_DATE',
            payload: event.target.value,
        })
    }

    const handlePosition = (event) => {
        dispatch({
            type: 'MODIFY_POSITION',
            payload: event.target.value,
        })
    }

    const sendProfileInfo = () => {

        // if (profile.username != '' && user.firstName != '' && profile.lastName != '' && profile.cohort != '' && profile.currentWork != '' && profile.position != '' && profile.startDate != '' && profile.linkedIn != '' && profile.github != '' && profile.portfolio != '' && profile.bio != '' && profile.uploadedFile != '') {
            dispatch({
                type: 'PUT_PROFILE_INFO',
                payload:profile
            })

            // dispatch({
            //     type: 'UPDATE_CURRENT_TECH',
            //     payload: currentStack
            // })

            // dispatch({
            //     type: 'UPDATE_KNOWN_TECH',
            //     payload: knownStack
            // })
        // }
    }
    return (
        <div className=" h-5/6">
            <div className="h-full  ">
                <div className=" h-4/5 overflow-auto" >
                    <div className=" h-72 flex justify-between ">
                        <div className="h-fit">
                            {/*----------------USER NAME----------------------  */}
                            <div className=" mt-10 mb-2 ml-7">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Username</label>
                                <input
                                    type="text"
                                    id="small-input"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-200 h-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    value={profile.username}
                                    onChange={handleUsername}
                                />
                            </div>
                            {/*----------------USER NAME----------------------  */}

                            {/*----------------FIRST NAME----------------------  */}
                            <div className="mb-2 ml-7">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">First Name</label>
                                <input
                                    type="text"
                                    id="small-input"
                                    className="block w-200 p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-10"
                                    value={profile.firstName}
                                    onChange={handleFirstName}
                                />
                            </div>
                            {/*----------------FIRST NAME----------------------  */}


                            {/*----------------LAST NAME----------------------  */}
                            <div className=" mt-2  ml-7">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Last Name</label>
                                <input
                                    type="text"
                                    id="default-input"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-200 h-10  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    value={profile.lastName}
                                    onChange={handleLastName}
                                />
                            </div>
                            {/*----------------LAST NAME----------------------  */}

                        </div>

                        {/*----------------BIO----------------------  */}
                        <div className="w-fit h-fit">

                            <label className="w-fit h-50 block mt-11 mb-2 text-sm font-medium text-gray-900 ml-1">Bio</label>
                            <textarea
                                id="message"
                                rows="10" cols="30"
                                className=" w-fit h-300 resize-none block p-2.5  text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Bio"
                                value={profile.bio}
                                onChange={handleBio}
                            ></textarea>
                            .
                        </div>
                        {/*----------------BIO----------------------  */}

                        {/*----------------IMAGE----------------------  */}
                        {/* <img src={URL.createObjectURL(uploadedFile)} alt="" /> */}
                        <div {...getRootProps()} className=" -mt-2 mr-4">
                            {displayImage()}
                            {/* <label for="dropzone-file" class="flex flex-col items-center justify-center w-full mt-20 h-10/12 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                        <div class="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg aria-hidden="true" class="w-10 h-32 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                            <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                        </div>
                        <input onClick={setTrue} {...getInputProps()}   id="dropzone-file" type="file" class="hidden" />
                    </label> */}

                        </div>

                        {/*----------------IMAGE----------------------  */}

                    </div>

                    {   /*----------------PRONOUNS----------------------  */}
                    <div className=" -mt- mb-2 ml-7">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Pronouns</label>
                        <input
                            type="text"
                            id="default-input"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-200 h-10  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            value={profile.pronouns}
                            onChange={handlePronouns}
                        />
                    </div>
                    {/*----------------PRONOUNS----------------------  */}


                    {/*----------------COHORT----------------------  */}
                    <div className="mb-2 ml-7">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Cohort</label>
                        <input
                            type="text"
                            id="small-input"
                            className="block w-200 h-10  p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            value={profile.cohort}
                            onChange={handleCohort}
                        />
                    </div>
                    {/*----------------COHORT----------------------  */}


                    {/*----------------CURRENT EMPLOYER AND DATES----------------------  */}
                    <label className="block mb-2 ml-7 text-sm font-medium text-gray-900 dark:text-black">Current Employer</label>
                    <div className="flex justify-between mb-2 ">

                        {/* -------------CURRENT EMPLOYER INPUT-------------- */}
                        <input
                            type="text"
                            id="default-input"
                            className=" ml-7  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-100 h-10  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            value={profile.currentWork}
                            onChange={handleCurrentWork}
                        />
                        {/* -------------CURRENT EMPLOYER INPUT-------------- */}


                        {/* -------------POSITION INPUT-------------- */}
                        <div className=" -mt-7 mb-2">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Position</label>
                            <input
                                type="text"
                                id="default-input"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-200 h-10  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                value={profile.position}
                                onChange={handlePosition}
                            />
                        </div>
                        {/* -------------POSITION INPUT-------------- */}

                        {/* -------------START DATE INPUT-------------- */}
                        <div className="-mt-8 mr-5 relative  date-rangepicke datepicker-format=mm/dd/yyyy ">
                            <div className=" inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <label className="mr-2 -ml-2 block mb-2 text-sm font-medium text-gray-900 dark:text-black">Start Date</label>

                                {/* <svg aria-hidden="true" class=" mb-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg> */}
                            </div>
                            <input
                                name="start"
                                type="text"
                                className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date start"
                                value={profile.startDate}
                                onChange={handleStartDate}
                            />
                        </div>
                        {/* -------------START DATE INPUT-------------- */}

                    </div>




                    {/*----------------TECH STACK----------------------  */}

                    <label className="block mb-2 ml-7 text-sm font-medium text-gray-900 dark:text-black">LinkedIn</label>
                    <div className="flex justify-between mb-2 ">

                        <input
                            type="text"
                            id="default-input"
                            className=" ml-7  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-100 h-10  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            value={profile.linkedIn}
                            onChange={handleLinkedIn}
                        />



                        {/* -------------GITHUB INPUT-------------- */}
                        <div className=" -mt-7 mb-2">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">GitHub Url</label>
                            <input
                                type="text"
                                id="default-input"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-200 h-10  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                value={profile.github}
                                onChange={handleGithub}
                            />
                        </div>
                        {/* -------------GITHUB INPUT-------------- */}

                        {/* -------------PORTFOLIO INPUT-------------- */}
                        <div className="-mt-8 mr-5 relative">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Portfolio Url</label>
                            <input
                                type="text"
                                id="default-input"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-200 h-10  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                value={profile.portfolio}
                                onChange={handlePortfolio}
                            />
                        </div>
                        {/* -------------PORTFOLIO INPUT-------------- */}

                    </div>
                    {/*----------------TECH STACK----------------------  */}

                    <div>
                        <div className="flex justify-center">
                            <div className="mr-60 inline">
                                <label className="ml-10 block mb-2 text-sm font-medium text-gray-900 dark:text-black">Current Stack</label>
                                <input
                                    type="text"
                                    id="default-input"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-200 h-10  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    value={currentStack}
                                    onChange={(event) => setCurrentStack(event.target.value)}
                                    onKeyPress={handleKeyPress}
                                />
                                {
                                    currentStacks?.map((stack) => {
                                        return (
                                            <div key={stack.id} id="alert-3" className="flex p-4 mt-4 mb-4 text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">

                                                <div className="ml-3 text-sm font-medium">
                                                    {stack} <a href="#" className="font-semibold underline hover:no-underline"></a>
                                                </div>
                                                <button type="button" className="ml-auto -mx-1.5 -my-1.5 bg-green-50 text-green-500 rounded-lg focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-green-200 inline-flex h-8 w-8 dark:bg-gray-800 dark:text-green-400 dark:hover:bg-gray-700" data-dismiss-target="#alert-3" aria-label="Close">
                                                    <span className="sr-only">Close</span>
                                                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                                </button>
                                            </div>
                                        )
                                    })
                                }
                            </div>

                            <div className=" inline">
                                <label className="ml-10 block mb-2 text-sm font-medium text-gray-900 dark:text-black">Known Stack</label>
                                <input
                                    type="text"
                                    id="default-input"
                                    value={knownStack}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-200 h-10  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    onChange={(event) => setKnownStack(event.target.value)}
                                    onKeyPress={handleKnownKeyPress}
                                />
                                {
                                    knownStacks?.map(stack => {
                                        return (
                                            <div key={stack.id} id="alert-3" className="flex p-4 mt-4 mb-4 text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">

                                                <div className="ml-3 text-sm font-medium">
                                                    {stack} <a href="#" className="font-semibold underline hover:no-underline"></a>
                                                </div>
                                                <button type="button" className="ml-auto -mx-1.5 -my-1.5 bg-green-50 text-green-500 rounded-lg focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-green-200 inline-flex h-8 w-8 dark:bg-gray-800 dark:text-green-400 dark:hover:bg-gray-700" data-dismiss-target="#alert-3" aria-label="Close">
                                                    <span className="sr-only">Close</span>
                                                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                                </button>
                                            </div>
                                        )
                                    })
                                }
                            </div>

                        </div>
                        <div className=" flex justify-end mr-3">
                            <button onClick={sendProfileInfo} className=" justify-end  inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
                                <span className=" px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                    Submit
                                </span>
                            </button>
                        </div>


                    </div>

                </div>
            </div>
        </div>
    )
}

export default ProfilePage;