import { useState } from 'react';
import styled from 'styled-components';
import './App.css';
import MainPage from '../_pages/MainPage';
import TransactionPage from '../_pages/TransactionPage';
const AppWrapper = styled.div`
  background: aliceblue;
`;
export default function App() {
  const [activePage, setactivePage] = useState('main');
  const toggleActivePage = (activePage = 'main') => {
    setactivePage(activePage);
  };

  return (
    <AppWrapper>
      {activePage === 'main' && <MainPage openActivePage={toggleActivePage} />}
      {activePage === 'costs' && (
        <TransactionPage
          closeActivePage={toggleActivePage}
          transTypes={'costs'}
        />
      )}
      {activePage === 'incomes' && (
        <TransactionPage
          closeActivePage={toggleActivePage}
          transTypes={'incomes'}
        />
      )}
      {activePage === 'balance' && <h1>Balance</h1>}
    </AppWrapper>
  );
}

// export default class App extends Component {
//     state = {
//     activePage: "main",
//     }

//   toggleActivePage = (activePage ="main") => {
//     this.setState({activePage})
//   }
//   render() {
//     const { activePage } = this.state;
//     return (
//       <div className='App'>
//         {activePage === "main" && <MainPage openActivePage={this.toggleActivePage} />}
//         {activePage === "costs" && <TransactionPage closeActivePage={this.toggleActivePage} transTypes={"costs"} />}
//         {activePage === "incomes" && <TransactionPage closeActivePage={this.toggleActivePage} transTypes={"incomes"} />}
//         {activePage === "balance" && <h1>Balance</h1>}

//       </div>
//     )

//   }
// }
