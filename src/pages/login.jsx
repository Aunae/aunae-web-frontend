import '../styles/login.css';

const Login = () => {
  return (
      <div>
          <div class="container">
              <div class="screen">
                  <div class="screen__content">
                      <div class="aunae-logo-image">
                          <img
                              src="https://cdn.discordapp.com/attachments/1019925108254580757/1024492248068522074/unknown.png"
                              alt="Aunae Logo"
                              height="70px"
                              width="70px"
                          />
                      </div>
                      <form class="login">
                          <div class="login__field">
                              <input
                                  type="text"
                                  class="login__input"
                                  placeholder="Kangnaeng@kangnam.ac.kr"
                              />
                          </div>
                          <div class="login__field">
                              <input
                                  type="password"
                                  class="login__input"
                                  placeholder="Password"
                              />
                          </div>
                          <button class="button login__submit">
                              <span class="button__text">Login</span>
                          </button>
                      </form>
                      <div class="aunae-logo">
                          <h3>AUNAE</h3>
                      </div>
                  </div>
                  <div class="screen__background">
                      <span class="screen__background__shape screen__background__shape4"></span>
                      <span class="screen__background__shape screen__background__shape3"></span>
                      <span class="screen__background__shape screen__background__shape2"></span>
                      <span class="screen__background__shape screen__background__shape1"></span>
                  </div>
              </div>
          </div>
      </div>
  );
};

export default Login;
