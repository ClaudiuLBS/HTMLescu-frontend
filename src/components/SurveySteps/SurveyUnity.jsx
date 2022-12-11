// API Service
import ApiService from "../../services/api.service";
import {useState, useEffect} from "react";

// Infinity spinner
import { InfinitySpin } from 'react-loader-spinner';

import "./SurveyLayout.scss";
import "../UI/SearchBranch/SearchBranch.scss";

import MainDescription from "../UI/MainDescription";
import MainTitle from "../UI/MainTitle";

import SearchBranch from "../UI/SearchBranch/SearchBranch"
import ChooseFromMap from "../UI/ChooseFromMap/ChooseFromMap"
import Location from "../UI/Location/Location"
import SurveyMap from "./SurveyMap";
import SurveryLayout from "./SurveyLayout";

function SurveyUnity() { 
    const [branches, setBranches] = useState(null);
    const [branchesAreLoading, setbranchesAreLoading ] = useState(false);
    const [suggestedBranches, setSuggestedBranches] = useState([]);
    const [numOfBranches, setNumOfBranches] = useState(2);
    const [userInput, setUserInput] = useState("0");

    // Use effect will get called when the page is being mounted
    useEffect(() => {
        ApiService.getAllBranches().then((res) => {
            setBranches(res);
            setSuggestedBranches(res);
            setbranchesAreLoading(true)
        });
    }, []);

    function handleNumOfBranches(){
        if(numOfBranches + 5 >= suggestedBranches.length)
            return suggestedBranches.length;
        return numOfBranches + 5;
    }

    function filterBranches(){
        setSuggestedBranches(branches.filter(branch => (
            branch.name.toLowerCase().indexOf(userInput.toLowerCase()) > -1 || 
            branch.street.toLowerCase().indexOf(userInput.toLowerCase()) > -1    
        )));
        console.log(userInput.toLowerCase());
    }

    // Function to render the spinner
    // when the page is mounted

    if(branches == null)
        return (
            <SurveryLayout currentPage={1}>
                <div className="survey_wrapper">
                    <MainTitle title="In ce locatie vrei sa ne vizitezi?"></MainTitle>
                    <MainDescription desc="Cauta unitatea BCR unde programezi vizita dupa adresa, oras/sector sau nume unitate."></MainDescription>
                    
                    <div className="nosubmit">
                        <input 
                            className="nosubmit" 
                            type="search" 
                            placeholder="Cauta unitate..."
                            onChange={(e) => {setUserInput(e.target.value); filterBranches(); }}></input>
                    </div>

                    <div className="spinner-wrapper">
                        <InfinitySpin 
                            width='200'
                            color="#1A67D2"
                        />
                    </div>
                    
                </div>
            </SurveryLayout>
        );

    return (
        <SurveryLayout currentPage={1}>
            <div className="survey_wrapper">
                <MainTitle title="In ce locatie vrei sa ne vizitezi?"></MainTitle>
                <MainDescription desc="Cauta unitatea BCR unde programezi vizita dupa adresa, oras/sector sau nume unitate."></MainDescription>
                
                <div className="nosubmit">
                    <input 
                        className="nosubmit" 
                        type="search" 
                        placeholder="Cauta unitate..."
                        onChange={(e) => {setUserInput(e.target.value); filterBranches(); setNumOfBranches(2); }}></input>
                </div>

                <ChooseFromMap></ChooseFromMap>
                <SurveyMap/>
                <div>
                    {suggestedBranches.slice(0, numOfBranches).map(branch => (
                        <Location
                        title = {branch.name}
                        distance = "678"
                        location = {branch.street}
                            disponibility = "Yees"
                            services = "Yessir" 
                            >
                        </Location>
                    ))}
                    {
                        numOfBranches + 5 < suggestedBranches.length ? <div className="btn-show-more__branches" onClick={() => setNumOfBranches(handleNumOfBranches())}>Afiseaza inca 5 locatii</div> : null
                    }
                </div>
            </div>
        </SurveryLayout>
    );
}

export default SurveyUnity;