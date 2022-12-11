import './HeaderNavigation.scss';
import { useEffect} from "react";
 
function HeaderNavigation(){
    useEffect(() => {
        var checkbox = document.querySelector('input[name=mode]');

    checkbox.addEventListener('change', function() {
        if(this.checked) {
            trans()
            document.documentElement.setAttribute('data-theme', 'dark')
        } else {
            trans()
            document.documentElement.setAttribute('data-theme', 'light')
        }
    })

    let trans = () => {
        document.documentElement.classList.add('transition');
        window.setTimeout(() => {
            document.documentElement.classList.remove('transition');
        }, 1000)
    }
    },[]);
    
    
    return(
        <div className="header_navigation">
             <div class="switch__btn">
                <input class="container_toggle" type="checkbox" id="switch" name="mode"/>
                <label for="switch">Toggle</label>
            </div>
            <div>Programare vizita BCR</div>
            <div></div>
        </div>
    )
}

export default HeaderNavigation;

