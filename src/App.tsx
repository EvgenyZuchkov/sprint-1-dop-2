import './App.css';
import {SuperButton} from "./components/SuperButton.tsx";
// import s from './components/SuperButon.module.css';
import {SuperCrosses} from "./components/SuperCrosses.tsx";
import {Modal} from "./components/modal/Modal.tsx";


export const App = () => {
    const crosses = [
        {id: 1, model: "ADIDAS", size: 'XXX'},
        {id: 2, model: "ABIBAS", size: 'YYY'},
        {id: 3, model: "PUMA", size: 'ZZZ'}
    ]

    return (
        <>
            {/*<SuperButton onClick={() => {}} className={s.redForSuperButton}>*/}
            {/*    Red super button*/}
            {/*</SuperButton>*/}

            {/*<SuperButton onClick={() => {}} className={s.blueForSuperButton}>*/}
            {/*    Blue super button*/}
            {/*</SuperButton>*/}


            {/*<SuperButton color={'red'}>Red SuperButton</SuperButton>*/}
            {/*<SuperButton color={'secondary'}>Secondary SuperButton</SuperButton>*/}
            {/*<SuperButton>Default SuperButton</SuperButton>*/}
            {/*<SuperButton disabled>Disabled SuperButton</SuperButton>*/}

            {/*<SuperCrosses crosses={crosses}/>*/}
            {/*<SuperCrosses crosses={crosses}/>*/}
            {/*<SuperCrosses crosses={crosses}/>*/}

            {/*<SuperCrosses crosses={crosses}>*/}
            {/*    <div>Куча всяко-разной инфы</div>*/}
            {/*    <div>Куча всяко-разной инфы</div>*/}
            {/*    <div>Куча всяко-разной инфы</div>*/}
            {/*    <div>Куча всяко-разной инфы</div>*/}
            {/*    <div>Куча всяко-разной инфы</div>*/}
            {/*    <SuperButton color={'red'}>Red SuperButton</SuperButton>*/}
            {/*    <SuperButton color={'secondary'}>Secondary SuperButton</SuperButton>*/}
            {/*    <SuperButton>Default SuperButton</SuperButton>*/}
            {/*    <SuperButton disabled>Disabled SuperButton</SuperButton>*/}
            {/*</SuperCrosses>*/}

            {/*<SuperCrosses crosses={crosses}>*/}
            {/*    <div>Куча всяко-разной инфы</div>*/}
            {/*    <div>Куча всяко-разной инфы</div>*/}
            {/*    <SuperButton color={'red'}>Red SuperButton</SuperButton>*/}
            {/*    <SuperButton color={'secondary'}>Secondary SuperButton</SuperButton>*/}
            {/*</SuperCrosses>*/}

            {/*<SuperCrosses crosses={crosses}>*/}
            {/*    <input type="text"/>*/}
            {/*    <input type="text"/>*/}
            {/*    <input type="text"/>*/}
            {/*    <input type="text"/>*/}
            {/*    <input type="text"/>*/}
            {/*    <div>Куча всяко-разной инфы</div>*/}
            {/*    <div>Куча всяко-разной инфы</div>*/}
            {/*    <SuperButton color={'red'}>Red SuperButton</SuperButton>*/}
            {/*    <SuperButton color={'secondary'}>Secondary SuperButton</SuperButton>*/}
            {/*</SuperCrosses>*/}

            {/*<Modal>*/}
            {/*        <input type="text" placeholder={'email'}/>*/}
            {/*        <input type="text" placeholder={'password'}/>*/}
            {/*        <button type="submit">Send</button>*/}
            {/*</Modal>  */}

            <Modal>
                <h1>Confident information</h1>
                <input type="text" placeholder={'email'}/>
                <input type="text" placeholder={'password'}/>
                <input type="text" placeholder={'password'}/>
                <label>
                    <input type='checkbox'/>
                    I agree
                </label>
                <button type="submit">Send</button>
            </Modal>
        </>

    );
}
