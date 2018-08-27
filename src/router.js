import React from "react";
import WizardOne from "./components/WizardOne/WizardOne";
import WizardTwo from "./components/WizardTwo/WizardTwo";
import WizardThree from "./components/WizardThree/WizardThree";
import WizardFour from "./components/WizardFour/WizardFour";
import WizardFive from "./components/WizardFive/WizardFive";
import WizardSix from "./components/WizardSix/WizardSix";
import WizardSeven from "./components/WizardSeven/WizardSeven";
import WizardEight from "./components/WizardEight/WizardEight";
import WizardNine from "./components/WizardNine/WizardNine";
import WizardTen from "./components/WizardTen/WizardTen";
import WizardEleven from "./components/WizardEleven/WizardEleven";
import Finish from "./components/Finish/Finish";

import NextBtn from "./components/NextBtn/NextBtn";
import { Switch, Route } from "react-router-dom";

export default (
  //     loanType,
  // propType,
  // changeLoanType,
  // changePropertyType,
  // changePropertyToBeUsedOn,
  // propToBeUsedOn,
  // city,
  // updateCity,
  // foundFalse,
  // foundTrue,
  // found,
  // realEstateAgentTrue,
  // realEstateAgentFalse,
  // realEstateAgent,
  // updateDownPayment,
  // downPayment,
  // updateCost,
  // cost,
  // credit,
  // updateCreditE,
  // updateCreditG,
  // updateCreditF,
  // updateCreditP,
  // history,
  // updateHistory,
  // addressOne,
  // addressTwo,
  // addressThree,
  // updateAddLineOne,
  // updateAddLineTwo,
  // updateAddLineThree,
  // updateFirst,
  // updateLast,
  // updateEmail,
  // firstName,
  // lastName,
  // email

  <Switch>
    <Route exact path="/" component={NextBtn} />
    <Route
      path="/wOne"
      component={WizardOne}
      //   loanType={loanType}
      //   propType={propType}
      //   handleLoanType={changeLoanType}
      //   handlePropType={changePropertyType}
    />
    <Route
      path="/wTwo"
      component={WizardTwo}
      //   city={city}
      //   updateCity={updateCity}
    />
    <Route
      path="/wThree"
      component={WizardThree}
      //   loanType={loanType}
      //   propType={propType}
      //   propToBeUsedOn={changePropertyToBeUsedOn}
      //   propUsedOn={propToBeUsedOn}
      // />
    />
    <Route
      path="/wFour"
      component={WizardFour}
      //   foundFalse={foundFalse}
      //   foundTrue={foundTrue}
      //   found={found}
      // />
    />
    <Route
      path="/wFive"
      component={WizardFive}
      //   realEstateAgentTrue={realEstateAgentTrue}
      //   realEstateAgentFalse={realEstateAgentFalse}
      //   realEstateAgent={realEstateAgent}
      // />
    />
    <Route
      path="/wSix"
      component={WizardSix}
      //   downPayment={downPayment}
      //   updateDownPayment={updateDownPayment}
      //   cost={cost}
      //   updateCost={updateCost}
      // />
    />
    <Route
      path="/wSeven"
      component={WizardSeven}
      //   credit={credit}
      //   updateCreditE={updateCreditE}
      //   updateCreditF={updateCreditF}
      //   updateCreditG={updateCreditG}
      //   updateCreditP={updateCreditP}
      // />
    />
    <Route
      path="/wEight"
      component={WizardEight}
      //   history={history}
      //   updateHistory={updateHistory}
      // />
    />
    <Route
      path="/wNine"
      component={WizardNine}
      //   addressOne={addressOne}
      //   addressTwo={addressTwo}
      //   addressThree={addressThree}
      //   updateAddLineOne={updateAddLineOne}
      //   updateAddLineTwo={updateAddLineTwo}
      //   updateAddLineThree={updateAddLineThree}
    />
    <Route
      path="/wTen"
      component={WizardTen}
      //   firstName={firstName}
      //   lastName={lastName}
      //   email={email}
      //   updateFirst={updateFirst}
      //   updateLast={updateLast}
      //   updateEmail={updateEmail}
      // />
    />
    <Route
      path="/wEleven"
      component={WizardEleven}
      //   firstName={firstName}
      //   lastName={lastName}
      //   email={email}
      //   loanType={loanType}
      //   propType={propType}
      //   propToBeUsedOn={propToBeUsedOn}
      //   city={city}
      //   found={found}
      //   realEstateAgent={realEstateAgent}
      //   downPayment={downPayment}
      //   cost={cost}
      //   credit={credit}
      //   history={history}
      //   addressOne={addressOne}
      //   addressTwo={addressTwo}
      //   addressThree={addressThree}
      // />
    />
    <Route path="/finish" component={Finish} />
  </Switch>
);
