import React from 'react';
import { useWallet } from 'use-wallet';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import Bank from '../Bank';

import { Box, Container, Typography, Grid } from '@material-ui/core';

import { Alert } from '@material-ui/lab';

import UnlockWallet from '../../components/UnlockWallet';
import Page from '../../components/Page';
import CemeteryCard from './CemeteryCard';
import CemeteryImage from '../../assets/img/cemetery.png';
import { createGlobalStyle } from 'styled-components';
import { genPoolStartTime, genFinishedTime, isGenFinished, tombRewardStartTime, tombRewardFinishedTime, isTombRewardFinished, tshareRewardStartTime } from '../../config';

import Countdown from 'react-countdown';

import useBanks from '../../hooks/useBanks';

import styled from 'styled-components';
const StyledLink = styled.a`
font-weight: 700;
text-decoration: none;
`;

const BackgroundImage = createGlobalStyle`
  body {
    background: url(${CemeteryImage}) no-repeat !important;
    background-size: cover !important;
  }
`;

const Cemetery = () => {
  const [banks] = useBanks();
  const { path } = useRouteMatch();
  const { account } = useWallet();
  const activeBanks = banks.filter((bank) => !bank.finished);
  return (
    <Switch>
      <Page>
        <Route exact path={path}>
          <BackgroundImage />
          {!!account ? (
            <Container maxWidth="lg">
              <Typography color="textPrimary" align="center" variant="h3" gutterBottom>
                Club
              </Typography>
              <Alert variant="filled" severity="warning">
              {/* Vinyl Finance is still under construction! Please do NOT purchase or stake any tokens yet as these are not the contracts that will be used when launched. <p>Follow us on <StyledLink target="_blank" href="https://twitter.com/vinyl_finance">Twitter</StyledLink> and join our <StyledLink target="_blank" href="https://discord.gg/VqwsjEFVzc">Discord</StyledLink> for launch updates.</p> */}
              {/* Vinyl Finance has not launched! Please do NOT purchase or stake any tokens as the official contracts will be deployed and renounced shortly before launch. <p>Follow us on <StyledLink target="_blank" href="https://twitter.com/vinyl_finance">Twitter</StyledLink> and join our <StyledLink target="_blank" href="https://discord.gg/VqwsjEFVzc">Discord</StyledLink> for launch updates.</p> */}
              {/* Vinyl Finance has not launched! But will very soon. Final contracts are deployed and token contracts are <StyledLink target="_blank" href="https://docs.vinyl.finance/protocol-info/contracts">renounced</StyledLink>. <p>Follow us on <StyledLink target="_blank" href="https://twitter.com/vinyl_finance">Twitter</StyledLink> and join our <StyledLink target="_blank" href="https://discord.gg/VqwsjEFVzc">Discord</StyledLink> for launch updates.</p> */}
              </Alert>

              <Box mt={5}>
                <div hidden={activeBanks.filter((bank) => bank.sectionInUI === 2).length === 0}>
                  <Typography color="textPrimary" variant="h4" gutterBottom>
                    Earn TRACKS by staking LP
                    <h6>starts in <Countdown date={tshareRewardStartTime*1000} /></h6>
                  </Typography>
                  <Grid container spacing={3}>
                    {activeBanks
                      .filter((bank) => bank.sectionInUI === 2)
                      .map((bank) => (
                        <React.Fragment key={bank.name}>
                          <CemeteryCard bank={bank} />
                        </React.Fragment>
                      ))}
                  </Grid>
                </div>

                <div hidden={activeBanks.filter((bank) => bank.sectionInUI === 1).length === 0}>
                  <Typography color="textPrimary" variant="h4" gutterBottom style={{ marginTop: '20px' }}>
                    Earn VINYL by staking LP
                    {/* <h4>start in <Countdown date={1647194400*1000} /></h4> */}
                    <h6>starts in <Countdown date={tombRewardStartTime*1000} /></h6>
                    {/* <h6>ends in <Countdown date={tombRewardFinishedTime*1000} /></h6> */}
                  </Typography>
                  {isTombRewardFinished ? 
                      <Alert variant="filled" severity="warning">
                        VINYL Reward Pool has ended please remove your staked VINYL/FTM LP and move into the TRACKS Reward Pool.
                      </Alert> : ''
                  }
                  <Grid container spacing={3}>
                    {activeBanks
                      .filter((bank) => bank.sectionInUI === 1)
                      .map((bank) => (
                        <React.Fragment key={bank.name}>
                          <CemeteryCard bank={bank} />
                        </React.Fragment>
                      ))}
                  </Grid>
                </div>

                <div hidden={activeBanks.filter((bank) => bank.sectionInUI === 0).length === 0}>
                  <Typography color="textPrimary" variant="h4" gutterBottom style={{ marginTop: '20px' }}>
                  Genesis Pools (1% deposit fee)
                  
                    <h6>starts in <Countdown date={genPoolStartTime*1000} /></h6>
                    {/* <h6>ends in <Countdown date={(genFinishedTime)*1000} /></h6> */}
                  </Typography>
                  {isGenFinished ? 
                      <Alert variant="filled" severity="warning">
                        Genesis Pools have ended please remove your staked tokens and form an LP.
                      </Alert> : ''
                  }
                  <Grid container spacing={3}>
                    {activeBanks
                      .filter((bank) => bank.sectionInUI === 0)
                      .map((bank) => (
                        <React.Fragment key={bank.name}>
                          <CemeteryCard bank={bank} />
                        </React.Fragment>
                      ))}
                  </Grid>
                </div>
              </Box>
            </Container>
          ) : (
            <UnlockWallet />
          )}
        </Route>
        <Route path={`${path}/:bankId`}>
          <BackgroundImage />
          <Bank />
        </Route>
      </Page>
    </Switch>
  );
};

export default Cemetery;
