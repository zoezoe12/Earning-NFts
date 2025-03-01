#![no_std]

use program_io::*;
use gear_lib::non_fungible_token::{
    state::{
        NFTQueryReply,
        NFTQuery
    },
    token::{ TokenId }
};
use gstd::prelude::*;

include!(concat!(env!("OUT_DIR"), "/wasm_binary.rs"));

#[gmeta::metawasm]
pub mod metafns {
    pub type State = program_io::State;
    
    pub fn token_uri2(state: State, token_id: TokenId) -> TokenURI {
        let metadata = state
            .token
            .token_metadata_by_id
            .iter()
            .find(|(id, _)| token_id.eq(id))
            .and_then(|(_id, metadata)| metadata.clone())
            .unwrap_or_default();
        let mut content = RutzoNft::default();
        if let Some((_id, nft)) = state.nfts.iter().find(|(id, _)| token_id.eq(id)) {
            content = nft.clone();
        }
        TokenURI { metadata, content }
    }
    
    /*
    pub fn token_uri(state: State, token_id: TokenId) -> Option<Vec<u8>> {
        let metadata = state
            .token
            .token_metadata_by_id
            .iter()
            .find(|(id, _)| token_id.eq(id))
            .and_then(|(_id, metadata)| metadata.clone())
            .unwrap_or_default();
        let content = RutzoNft::default();
        if let Some((_id, nft)) = state.nfts.iter().find(|(id, _)| token_id.eq(id)) {
            content = nft.clone();
        }
        Some(TokenURI { metadata, content }.enconde())
    }
    */
    
    pub fn base(state: State, query: NFTQuery) -> Option<Vec<u8>> {
        let encoded = match query {
            NFTQuery::NFTInfo => NFTQueryReply::NFTInfo {
                name: state.token.name.clone(),
                symbol: state.token.symbol.clone(),
                base_uri: state.token.base_uri,
            },
            NFTQuery::Token { token_id } => NFTQueryReply::Token {
                token: state.token.token(token_id),
            },
            NFTQuery::TokensForOwner { owner } => NFTQueryReply::TokensForOwner {
                tokens: state.token.tokens_for_owner(&owner),
            },
            NFTQuery::TotalSupply => NFTQueryReply::TotalSupply {
                total_supply: state.token.total_supply(),
            },
            NFTQuery::SupplyForOwner { owner } => NFTQueryReply::SupplyForOwner {
                supply: state.token.supply_for_owner(&owner),
            },
            NFTQuery::AllTokens => NFTQueryReply::AllTokens {
                tokens: state.token.all_tokens(),
            },
            NFTQuery::ApprovedTokens { account } => NFTQueryReply::ApprovedTokens {
                tokens: state.token.approved_tokens(&account),
            },
        }
        .encode();
        Some(encoded)
    }
    
}


/*
fn token_helper(token_id: &TokenId, state: &IoNft) -> Token {
    let mut token = Token::default();
    if let Some((_token_id, owner_id)) = state
        .token
        .owner_by_id
        .iter()
        .find(|(id, _metadata)| token_id.eq(id))
    {
        token.id = *token_id;
        token.owner_id = *owner_id;
    }
    if let Some((_token_id, approved_account_ids)) = state
        .token
        .token_approvals
        .iter()
        .find(|(id, _metadata)| token_id.eq(id))
    {
        token.approved_account_ids = approved_account_ids.iter().copied().collect();
    }
    if let Some((_token_id, Some(metadata))) = state
        .token
        .token_metadata_by_id
        .iter()
        .find(|(id, _metadata)| token_id.eq(id))
    {
        token.name = metadata.name.clone();
        token.description = metadata.description.clone();
        token.media = metadata.media.clone();
        token.reference = metadata.reference.clone();
    }
    token
}
*/





    /*
    
    pub fn token(state: State, token_id: TokenId) -> Token {
        token_helper(&token_id, &state)
    }

    pub fn info(state: State) -> NFTQueryReply {
        NFTQueryReply::NFTInfo {
            name: state.token.name.clone(),
            symbol: state.token.symbol.clone(),
            base_uri: state.token.base_uri,
        }
    }

    pub fn tokens_for_owner(state: State, owner: ActorId) -> Vec<Token> {
        let mut tokens: Vec<Token> = Vec::new();
        if let Some((_owner, token_ids)) = state
            .token
            .tokens_for_owner
            .iter()
            .find(|(id, _tokens)| owner.eq(id))
        {
            for token_id in token_ids {
                tokens.push(token_helper(token_id, &state));
            }
        }
        tokens
    }
    pub fn total_supply(state: State) -> u128 {
        state.token.owner_by_id.len() as u128
    }

    pub fn supply_for_owner(state: State, owner: ActorId) -> u128 {
        let tokens = state
            .token
            .tokens_for_owner
            .iter()
            .find(|(id, _tokens)| owner.eq(id));

        tokens
            .map(|(_id, tokens)| tokens.len() as u128)
            .unwrap_or(0)
    }

    pub fn all_tokens(state: State) -> Vec<Token> {
        state
            .token
            .owner_by_id
            .iter()
            .map(|(id, _owner)| token_helper(id, &state))
            .collect()
    }

    pub fn token_by_id(state: State, id: TokenId) -> Option<Token> {
        state
            .token
            .owner_by_id
            .iter()
            .find(|(i, _)| id.eq(i))
            .map(|(token_id, _)| token_helper(token_id, &state))
    }

    pub fn approved_tokens(state: State, account: ActorId) -> Vec<Token> {
        state
            .token
            .owner_by_id
            .iter()
            .filter_map(|(id, _owner)| {
                state
                    .token
                    .token_approvals
                    .iter()
                    .find(|(token_id, _approvals)| token_id.eq(id))
                    .and_then(|(_token_id, approvals)| {
                        if approvals.contains(&account) {
                            Some(token_helper(id, &state))
                        } else {
                            None
                        }
                    })
            })
            .collect()
    }
    */