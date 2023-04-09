import { useState } from 'react'
import styled from 'styled-components'
import CoinItems from './CoinItems'

const tempFromAddress = ''

const CoinSelector = ({
    setAction,
    selectedToken,
    setSelectedToken,
    sanityTokens,
    twTokens,
    walletAddress,
}) => {
    const [sender] = useState(walletAddress)

    return (
        <Wrapper>
            <Title>Select asset</Title>
            <CoinList>
                {sanityTokens.map(token => (
                    <CoinItems
                        key={token.name}
                        token={token}
                        sender={sender}
                        selectedToken={selectedToken}
                        setAction={setAction}
                        setSelectedToken={setSelectedToken}
                        sanityTokens={sanityTokens}
                        twTokens={twTokens}
                    />
                ))}
            </CoinList>
        </Wrapper>
    )
}

export default CoinSelector

const Wrapper = styled.div``
const Title = styled.div`
    width: 100%;
    text-align: center;
    font-size: 1.5rem;
    margin-bottom: 1rem;
  `
const CoinList = styled.div`
    display: flex;
    flex-direction: column;
  `
