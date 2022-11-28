import React from 'react';
import './App.css';
import react from "react";
import Counter from "./components/Counter";
import Button from "./components/Button";
import counter from "./components/Counter";
import { useForm } from 'react-hook-form';

function App() {
    const [strawberry, setStrawberry] = react.useState(0);
    const [banana, setBanana] = react.useState(0);
    const [apple, setApple] = react.useState(0);
    const [kiwi, setKiwi] = react.useState(0);



    function reset() {
        setStrawberry(0)
        setBanana(0)
        setApple(0)
        setKiwi(0)

    }

    return (
        <>        <h1>Fruitmand bezorgservice</h1>

            <div>
            <section className="fruit-counters">
                <article>
                    <h2>🍓 Aardbeien</h2>
                    <Counter
                        fruitCount={strawberry}
                        setFruitCount={setStrawberry}
                    />
                </article>
                <article><h2>🍌 Bananen</h2>                <Counter
                    fruitCount={banana}
                    setFruitCount={setBanana}
                />
                </article>
                <article>
                    <h2>🍏 Appels</h2>
                    <Counter
                        fruitCount={apple}
                        setFruitCount={setApple}
                    />
                </article>
                <article>
                    <h2>🥝 Kiwi's</h2>
                    <Counter
                        fruitCount={kiwi}
                        setFruitCount={setKiwi}
                    />
                </article>
                <div className="resetbutton">
                <Button type="button" clickHandler={reset}>Reset</Button>
                </div>

            </section>

            <form >
                <label className="boxFlex">
                    <p>Voornaam</p>
                    <input type="text"/>
                </label>
                <label className="boxFlex">
                    <p>Achternaam</p>
                    <input type="text"/>
                </label>
                <label className="boxFlex">
                    <p>Leeftijd</p>
                    <input type="number"/>
                </label>
                <label className="boxFlex">
                    <p>PostCode</p>
                    <input type="text"/>
                </label>
                <label className="freqeuentie">
                    <p>Bezorgfrequentie</p>
                    <select id="scrollDown">

                        <option value="">
                            iedere dag</option>
                        <option value="">
                            iedere week</option>
                        <option value="">
                            iedere maand</option>
                    </select>
                </label>

                <label className="checkBox">
                <input type="radio"/>
                <p>Overdag</p>
                <input type="radio"/>
                <p>`s Avonds</p>
                </label>

                <label>
                 <p>Opmerking</p>
                 <textarea
                  name="suggestion_text"
                  rows={5}
                  cols={25}
                  required></textarea>
                  </label>



                <label className="checkBox">
                    <input type="radio"/>
                    <p>Ik ga akkord met de voorwaarden</p>
                </label>
                <Button>Verzend</Button>


            </form>
            </div>

    </>
  );
}

export default App;
