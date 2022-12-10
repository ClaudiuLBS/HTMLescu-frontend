// API Service
import ApiService from "../../services/api.service";
import {useState, useEffect} from "react";

import "./SurveyLayout.scss";

import MainDescription from "../UI/MainDescription";
import MainTitle from "../UI/MainTitle";

import SearchBranch from "../UI/SearchBranch/SearchBranch"
import ChooseFromMap from "../UI/ChooseFromMap/ChooseFromMap"
import Location from "../UI/Location/Location"

function SurveyUnity(){
    const [branches, setBranches] = useState(null);
    const [numOfBranches, setNumOfBranches] = useState(2);

    // Use effect will get called when the page is being mounted
    useEffect(() => {
        ApiService.getAllBranches().then((res) => {
            setBranches(res);
        });
    }, []);

    function handleNumOfBranches(){
        console.log(numOfBranches + 5);
        if(numOfBranches + 5 >= branches.length)
            return branches;
        return numOfBranches + 5;
    }

    if(branches == null)
        return (<div></div>);
    return(
        <div className="survey_wrapper">
            <MainTitle title="In ce locatie vrei sa ne vizitezi?"></MainTitle>
            <MainDescription desc="Cauta unitatea BCR unde programezi vizita dupa adresa, oras/sector sau nume unitate."></MainDescription>
            <SearchBranch></SearchBranch>
            <ChooseFromMap></ChooseFromMap>
            <div>
                {branches.slice(0, numOfBranches).map(branch => (
                    <Location
                        title = {branch.name}
                        distance = "678"
                        location = {branch.street}
                        disponibility = "Yees"
                        services = "Yessir" 
                    >
                    </Location>
                ))}
                <div className="btn-show-more__branches" onClick={() => setNumOfBranches(handleNumOfBranches())}>Afiseaza inca 5 locatii</div>
            </div>
        </div>
    )
}

export default SurveyUnity;