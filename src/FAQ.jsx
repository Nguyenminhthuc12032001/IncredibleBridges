import CloseIcon from '@mui/icons-material/Close';
import HelpIcon from '@mui/icons-material/Help';
import faqdata from './faqdata.json';  // Importing FAQ data for the homepage FAQ

// FAQ component for bridge-specific FAQs
function FAQ({ bridgeData, Close }) {
    return (
        <div className="con-modal">
            <div className="form-detail">
                <h1>?</h1>
                <ul className="list-detail">
                    {
                        bridgeData.faq.map((item, index) => (
                            <li style={index % 2 === 0 ? { backgroundColor: '#212529', color: 'white', textAlign: 'center' } : { textAlign: 'center' }} key={index}>
                                <h4><HelpIcon /> {item.question}</h4>
                                <h6>{item.answer}</h6>
                            </li>
                        ))
                    }
                </ul>

                {/* Button to close the FAQ modal */}
                <div className="btn-detail">
                    <button type="button" className="btn" onClick={Close}>
                        <CloseIcon />
                    </button>
                </div>

            </div>
        </div>
    );
}

// Homefaq component for general FAQ
function Homefaq({ Close }) {
    return (
        <div className="con-modal">
            <div className="form-detail">
                <h1>?</h1>
                <ul className="list-detail">
                    {
                        faqdata.map((item, index) => (
                            <li style={index % 2 === 0 ? { backgroundColor: '#212529', color: 'white', textAlign: 'center' } : { textAlign: 'center' }} key={index}>
                                <h4><HelpIcon /> {item.question}</h4>
                                <h6>{item.answer}</h6>
                            </li>
                        ))
                    }
                </ul>

                {/* Button to close the Homefaq modal */}
                <div className="btn-detail">
                    <button type="button" className="btn" onClick={Close}>
                        <CloseIcon />
                    </button>
                </div>

            </div>
        </div>
    );
}

export { FAQ, Homefaq };