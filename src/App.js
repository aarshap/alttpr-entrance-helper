import './App.css';
import Connector from './components/Connector'
import Location from './components/Location'

function App() {

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

    const dungeons = [
        { label: 'Desert Palace', count: 3 },
        { label: 'Hyrule Castle', count: 3 },
        { label: 'Turtle Rock', count: 4 },
    ]

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

    const itemLocations = [
        { label: 'Blind’s Hut' },
        { label: 'Hype Cave' },
        { label: 'Mini Moldorm' },
        { label: 'Saha’s Closet' }
    ]

    return (
        <>

            <h2>Entrance connectors</h2>

            <div className="button-group connectors">
                {connectors.map((connector, i) =>
                    <Connector label={connector.label} count={connector.count} key={i} />
                )}
            </div>

            <h2>Dungeon connectors</h2>

            <div className="button-group dungeons">
                {dungeons.map((dungeon, i) =>
                    <Connector label={dungeon.label} count={dungeon.count} key={i} />
                )}
            </div>

            <h2>Dropdowns</h2>

            <div className="button-group dropdowns">
                {dropdowns.map((dropdown, i) =>
                    <Location type="dropdown" label={dropdown.label} key={i} />
                )}
            </div>

            <h2>High value item locations</h2>

            <div className="button-group item-locations">
                {itemLocations.map((location, i) =>
                    <Location label={location.label} key={i} />
                )}
            </div>



        </>
    )
}

export default App;
