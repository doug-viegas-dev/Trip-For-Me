/* eslint-disable @next/next/no-img-element */
import styles from "./footer.module.scss";
import Image from "next/image";
import Logomarca from "../../../public/imgs/logomarca_white.png";
import logoCadastur from "../../../public/imgs/logo_cadastur.png";
import qrCadastur from "../../../public/imgs/cadastur_qr.jpg";
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_columns}>
        <div className={styles.column_footer} id={styles.column_logo}>
          <img src={Logomarca.src} alt="Logomarca" />
        </div>
        <div className={styles.column_footer} id={styles.column_navegue}>
          <h6>Navegue</h6>
          <ul>
            <li>Início</li>
            <li>Viagens Internacionais</li>
            <li>Viagens Nacionais</li>
            <li>Viagem do meu Jeito</li>
            <li>Contato</li>
          </ul>
        </div>
        <div className={styles.column_footer} id={styles.column_contato}>
          <h6>Informações de Contato</h6>
          <ul>
            <li>(43) 9 8873-2858</li>
            <li>contato@tripform.me</li>
            <li>
              Av. Des. Lima e Castro, 337, Niterói - RJ 24120-350 - Brasil
            </li>
          </ul>
        </div>
        <div className={styles.column_footer} id={styles.column_cadastur}>
          <img src={logoCadastur.src} alt="Logo Cadastur"/>
          <div className={styles.divqr}>
            <img src={qrCadastur.src} alt="Logo Cadastur"/>
            <p>Escaneie o QR Code ao lado para acessar nossas credenciais.</p>
          </div>
        </div>
      </div>
      <p className={styles.copyright}>
        Copyright © 2026. Todos os Direitos Reservados | Trip For Me. CNPJ:
        40.640.523/0001-17{" "}
      </p>
    </footer>
  );
}
