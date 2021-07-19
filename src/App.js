import React from 'react'
import { MotionConfig } from 'framer-motion';
import './App.css';
import Category from './components/Category'
import Connector from './components/Connector'
import Footer from './components/Footer'
import Location from './components/Location'

function App() {

    // Entrance connector data

    const connectors = [
        { label: 'Bumper Cave', count: 2 },
        { label: 'Elder House', count: 2 },
        { label: 'Fairy Ascen.', count: 2 },
        { label: 'Hooksh. Cave', count: 2 },
        { label: 'Old Man Rescue', count: 2 },
        { label: 'Mount. S&Q', count: 2 },
        { label: 'Return Cave', count: 2 },
        { label: 'Spiral Cave', count: 2 },
        { label: 'Super-bunny', count: 2 },
        { label: 'Two Brothers', count: 2 },
        { label: 'Paradox Cave', count: 3 },
        { label: 'Spec. Rock', count: 3 }
    ]

    // Dungeon connector data

    const dungeons = [
        { label: 'Desert Palace', count: 3 },
        { label: 'Hyrule Castle', count: 3 },
        { label: 'Turtle Rock', count: 4 },
    ]

    // Dropdown data

    const dropdowns = [
        { label: 'Back of Escape' },
        { label: 'Ganon' },
        { label: 'Kakariko Well' },
        { label: 'Lost Woods' },
        { label: 'Lumber-jack' },
        { label: 'Magic Bat' },
        { label: 'Uncle' },
        { label: 'Useless Fairy' },
    ]

    // High value item location data

    const itemLocations = [
        { label: 'Blind’s Hut' },
        { label: 'Hype Cave' },
        { label: 'Mini Moldorm' },
        { label: 'Saha’s Closet' }
    ]

    return (

        // Sets all Motion animations in the app to use the "tween" type

        <MotionConfig transition={{ type: "tween" }}>

            <div className="container">

                <main>

                    <Category heading="Entrance connectors">
                        <div className="button-group connectors">
                            {connectors.map((connector, i) =>
                                <Connector label={connector.label} count={connector.count} key={i} />
                            )}
                        </div>
                    </Category>

                    <Category heading="Dungeon connectors">
                        <div className="button-group dungeons">
                            {dungeons.map((dungeon, i) =>
                                <Connector label={dungeon.label} count={dungeon.count} key={i} />
                            )}
                        </div>
                    </Category>

                    <Category heading="Dropdowns">
                        <div className="button-group dropdowns">
                            {dropdowns.map((dropdown, i) =>
                                <Location type="dropdown" label={dropdown.label} key={i} />
                            )}
                        </div>
                    </Category>

                    <Category heading="High value item locations">
                        <div className="button-group item-locations">
                            {itemLocations.map((location, i) =>
                                <Location label={location.label} key={i} />
                            )}
                        </div>
                    </Category>

                </main>

                <Footer />

            </div>

        </MotionConfig>

    )
}

export default App;
