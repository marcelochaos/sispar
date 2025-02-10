import Capa from"../../assets/Tela Login/imagem tela de login.png"
import Logo from"../../assets/Tela Login/logo-ws.png"
import styles from "./Login.module.scss"
function Login(){
    return(
        <main>
        <section className={styles.containerImagem}>
            </section>
        <section>

        </section> class Name={styles.containerForm}
        <img src={Logo} alt= "Logo da Wilson sons" />
        <h1>ola eu sou componente de login</h1>
        <p> Sistema de Emissão de Boletos e Parcelamento</p>
<form action="">
<input type="email" name="email" id="email" placeholder="email" />
<input type="password" name="senha" id="senha" placeholder="senha" />

<a href="">Esqueci minha senha</a>

<div>
    <button classname={styles.buttonEntrar}>Entrar</button>
    <button classname={styles.buttonCriar}>Criar conta</button>
</div>

</form>
        
        </main>
    );
}
export default Login;