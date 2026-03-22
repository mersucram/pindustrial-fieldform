import Tabs from './components/Tabs';
import './App.css'
import './assets/scss/app.scss'; // Import your custom SCSS file
import logo from './assets/images/logo-alternate.png'
import GeneralInfoForm from './components/GeneralInfoForm';

function App() {
  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={logo} alt="logo" />
        </div>
        <div>
          <h4>Custom Metal Fabrication, Installation, Field & Foundry Services</h4>
            <div className="App">
                      <Tabs>
                        <div title="General">
                            {/* Content for Tab 1 */}
                          <GeneralInfoForm />
                        </div>
                        <div title="Employee">
                            {/* Content for Tab 2 */}
                            <p>This is the content for the second tab. It can contain other components or elements.</p>
                            <ul>
                                <li>Item 1</li>
                                <li>Item 2</li>
                            </ul>
                        </div>
                                <div title="Job">
                                    <p>This is the content for the third tab. It can contain other components or elements.</p>
                                </div>
                                <div title="Materials">
                            <p>This is the content for the third tab. It can contain other components or elements.</p>
                        </div>
                        <div title="Equipment">
                            <p>This is the content for the third tab. It can contain other components or elements.</p>
                        </div>
                        <div title="Notes">
                            <p>This is the content for the third tab. It can contain other components or elements.</p>
                        </div>
                    </Tabs>
              </div>
        </div>
      </section>

      <div></div>

      <section id="next-steps">
        <div id="docs"></div>
        <div id="social"></div>
      </section>
      <section id="spacer"></section>
    </>
  )
}

export default App
