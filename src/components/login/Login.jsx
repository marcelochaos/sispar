import Capa from"../../assets/Tela Login/imagem tela de login.png"
import Logo from"../../assets/Tela Login/logo-ws.png"
function Login(){
    return(
        <main>
        <section>
            <p>reservado para imagem</p>
            </section>
        <section>

        </section>
        <img src={Logo} alt= "Logo da Wilson sons" />
        <h1>ola eu sou componente de login</h1>
        <p> Sistema de Emissão de Boletos e Parcelamento</p>
<form action="">
<input type="email" name="email" id="email" placeholder="email" />
<input type="password" name="senha" id="senha" placeholder="senha" />

<a href="">Esqueci minha senha</a>

<div>
    <button>Entrar</button>
    <button>Criar conta</button>
</div>

</form>
        
        </main>
    );
}
export default Login;