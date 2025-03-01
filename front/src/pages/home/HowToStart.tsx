import { TbHexagonNumber1, TbHexagonNumber2, TbHexagonNumber3, TbExternalLink } from 'react-icons/tb';
import extension from 'assets/images/howto/extension.png';
import signin from 'assets/images/howto/signin.png';
import marketplace from 'assets/images/marketplace.svg';
import Container from 'react-bootstrap/Container';

function HowToStart() {
  return ( 
    <Container style={{ marginBlock: '5%' }} className='text-light'>
      <Container style={{ alignSelf: 'center'}}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>
          <TbHexagonNumber1 style={{ fontSize: '300%' }} />
          <br/><br/>
          Download the <a href="https://polkadot.js.org/extension/" className='link-light'>polkadot js extension   <TbExternalLink /></a>
        </h2>
        <p style={{marginBottom: '50px', textAlign: 'center'}}>Create and sign transactions with your accounts</p>
        <img src={extension} alt="Polkadot extension" style={{width: '100%', marginBottom: '50px'}}/>
      </Container>
      <Container style={{ alignSelf: 'center'}}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>
          <TbHexagonNumber2 style={{ fontSize: '300%' }} />
          <br/><br/>
          Connect your account with Rutzo
        </h2>
        <p style={{marginBottom: '50px', textAlign: 'center'}}>Select the account to save your NFTs and start playing</p>
        <img src={signin} alt="Select polkadot account" style={{width: '100%'}}/>
      </Container>
      <Container style={{ alignSelf: 'center'}}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>
          <TbHexagonNumber3 style={{ fontSize: '300%' }} />
          <br/><br/>
          Enter the <a href="/marketplace" className='link-light'>Marketplace   <TbExternalLink /></a>
        </h2>
        <p style={{marginBottom: '50px', textAlign: 'center'}}>And get amazing NFTs</p>
        <img src={marketplace} alt="Marketplace banner" style={{width: '100%'}}/>
      </Container>
    </Container>
    
  );
}

export { HowToStart };
