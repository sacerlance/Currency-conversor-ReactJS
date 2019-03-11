import Form from '..././components/loginForm.js';
import '../../styles/home.css';

export default class loginScreen {
  getScreen: () => {
    return (
      <div className='backgroundImage'>
        <div className='form-container'>
          <Form />
        </div>
      </div>
    );
  }
};
