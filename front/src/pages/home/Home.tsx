import { ReactComponent as Intro } from 'assets/images/Intro.svg';
import Container from 'react-bootstrap/Container';
import { Features } from './Features';
import { HowToStart } from './HowToStart';
import { FAQ } from './FAQ';
import './Home.scss';

function Home() {
  return (
    <Container className='About'>
      <Intro style={{width: '100%'}}/>
        <div className="playcontainer">
            <a href="/play" className="play">
                <svg width="30" height="24" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.47752 0.139215C3.89907 0.269986 3.28622 0.791419 2.66869 1.67868C1.45551 3.42341 0.400225 6.4113 0.0844225 8.98701C0.0156338 9.54983 0 9.81468 0 10.4106C0 11.0165 0.0156338 11.2499 0.0844225 11.6604C0.295479 12.9002 0.847352 13.6038 1.71503 13.7395C2.12776 13.8041 2.5358 13.7196 2.94541 13.4862C3.33469 13.2644 3.65987 12.9896 4.11794 12.4947C4.51973 12.061 4.78394 11.7266 5.46245 10.7913C5.67976 10.4901 5.92365 10.1606 6.00494 10.0597L6.1519 9.87262H9.99625H13.8406L13.9876 10.0597C14.0689 10.1606 14.3315 10.5165 14.5738 10.8493C15.2867 11.8325 15.5556 12.1653 16.009 12.637C16.3936 13.0343 16.6594 13.2561 16.9924 13.4548C17.427 13.713 17.8475 13.8074 18.2775 13.7395C18.4791 13.708 18.6449 13.6534 18.8153 13.5624C19.8768 12.9996 20.2458 11.1654 19.8377 8.49041C19.5094 6.33846 18.6808 3.93325 17.6943 2.25971C17.3754 1.72006 17.0768 1.31451 16.7266 0.940399C16.3123 0.500079 15.9777 0.269986 15.5838 0.152457C15.4603 0.114384 15.4274 0.00513196 14.0986 0.000165939C12.801 -0.00480008 12.7853 0.106107 12.6853 0.137559C12.5524 0.180598 12.3585 0.31137 12.0443 0.569603C11.7613 0.801351 11.6065 0.907292 11.4862 0.953642C11.4095 0.981783 11.3236 0.983438 9.99625 0.983438C8.66894 0.983438 8.58295 0.981783 8.50635 0.953642C8.38597 0.907292 8.23119 0.801351 7.94822 0.569603C7.63555 0.313025 7.44169 0.182253 7.31036 0.139215C7.21343 0.107763 7.14933 -0.0014894 5.89394 0.000165939C4.69952 0.000165939 4.59946 0.111074 4.47752 0.139215ZM14.9725 2.19846C15.1366 2.23984 15.2805 2.37392 15.3368 2.54277C15.368 2.63381 15.368 2.80928 15.3368 2.90032C15.207 3.28436 14.7411 3.38865 14.4831 3.09234C14.3815 2.97647 14.3503 2.88874 14.3503 2.72155C14.3503 2.61395 14.3581 2.56263 14.3831 2.5047C14.4488 2.35572 14.5785 2.2415 14.7317 2.19846C14.8255 2.17197 14.8631 2.17197 14.9725 2.19846ZM5.24358 3.01123V3.59888H5.79858H6.35358L6.35045 3.98954L6.34576 4.37854L5.79545 4.37689H5.24358L5.24045 4.96784L5.23576 5.56046L4.86524 5.56542L4.49315 5.56873V4.97281V4.37689H3.93815H3.38315V3.98788V3.59888H3.93815H4.49315V3.01123V2.42358H4.86836H5.24358V3.01123ZM13.7218 3.52273C13.8906 3.56411 14.0454 3.71806 14.0923 3.89022C14.1204 3.99285 14.1064 4.18818 14.0642 4.28088C14.0157 4.38516 13.9141 4.48945 13.8109 4.54076C13.6858 4.60201 13.5107 4.60036 13.3872 4.53745C13.284 4.48448 13.1809 4.37358 13.134 4.26432C13.0855 4.15507 13.0855 3.93657 13.1324 3.82897C13.1996 3.67668 13.3388 3.55584 13.4935 3.51777C13.5795 3.49625 13.6202 3.4979 13.7218 3.52273ZM16.3545 3.56577C16.5312 3.65847 16.6328 3.83228 16.6328 4.04582C16.6328 4.15342 16.625 4.18652 16.5812 4.28088C16.4905 4.47786 16.3295 4.5838 16.1247 4.5838C15.9183 4.58215 15.7589 4.47621 15.6682 4.28088C15.6244 4.18652 15.6166 4.15507 15.6166 4.04582C15.6182 3.9465 15.626 3.9018 15.6588 3.82897C15.7839 3.54094 16.0856 3.42672 16.3545 3.56577ZM15.096 4.90329C15.1961 4.9546 15.293 5.0622 15.3414 5.17145C15.3946 5.29229 15.3977 5.48762 15.3477 5.60515C15.3008 5.7144 15.1992 5.82531 15.0944 5.87828C15.0194 5.91801 14.9881 5.92463 14.874 5.92463C14.7599 5.92463 14.7286 5.91801 14.652 5.87828C14.3909 5.74254 14.2862 5.39327 14.43 5.12841C14.4785 5.03737 14.6082 4.91487 14.6911 4.88342C14.7911 4.84369 15.0022 4.85528 15.096 4.90329ZM8.04984 7.03371C8.42662 7.11813 8.74711 7.45582 8.8331 7.86303C8.88625 8.11796 8.83935 8.41426 8.71115 8.64435C8.62986 8.79168 8.46101 8.96052 8.31562 9.03998C8.14833 9.13102 8.02014 9.16579 7.83879 9.16579C7.43856 9.16744 7.08836 8.93569 6.91639 8.55662C6.83822 8.38281 6.81634 8.27687 6.8179 8.08485C6.81946 7.65943 7.03365 7.30187 7.39635 7.11482C7.5949 7.01219 7.82628 6.98405 8.04984 7.03371ZM12.3773 7.03371C12.5915 7.08171 12.8213 7.234 12.9573 7.41609C13.1074 7.61804 13.1746 7.83324 13.1746 8.1014C13.173 8.40764 13.0714 8.65263 12.8557 8.87114C12.6571 9.07143 12.4289 9.16744 12.1537 9.16579C11.877 9.16413 11.6331 9.05819 11.4424 8.85458C11.2501 8.64932 11.1563 8.42916 11.1422 8.15106C11.1313 7.94746 11.1625 7.78689 11.2501 7.59983C11.3783 7.32836 11.6566 7.09827 11.9348 7.03536C12.0677 7.00391 12.246 7.00391 12.3773 7.03371Z" fill="white"/>
                </svg>
                PLAY
            </a>
        </div>

      <h1 style={{ textAlign: 'center', margin: '5%'}} id='features' className='title'>Features</h1>
      <Features />
      <h1 style={{ textAlign: 'center', margin: '5%'}} id='how-to-start' className='title'>How to start</h1>
      <HowToStart />
      <h1 style={{ textAlign: 'center', margin: '5%'}} id='faq' className='title'>FAQ</h1>
      <FAQ />
    </Container>
  );
}

export { Home };
