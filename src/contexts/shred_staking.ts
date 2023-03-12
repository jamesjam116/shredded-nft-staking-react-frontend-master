export type StakingProgram = {
    "version": "0.1.0",
    "name": "shred_staking",
    "instructions": [
        {
            "name": "initialize",
            "accounts": [
                {
                    "name": "admin",
                    "isMut": true,
                    "isSigner": true
                },
                {
                    "name": "globalAuthority",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "rewardVault",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "systemProgram",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "rent",
                    "isMut": false,
                    "isSigner": false
                }
            ],
            "args": [
                {
                    "name": "globalBump",
                    "type": "u8"
                }
            ]
        },
        {
            "name": "initializeUserPool",
            "accounts": [
                {
                    "name": "userPool",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "owner",
                    "isMut": true,
                    "isSigner": true
                }
            ],
            "args": []
        },
        {
            "name": "stakeNftToPool",
            "accounts": [
                {
                    "name": "owner",
                    "isMut": true,
                    "isSigner": true
                },
                {
                    "name": "userPool",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "globalAuthority",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "userTokenAccount",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "destNftTokenAccount",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "nftMint",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "tokenProgram",
                    "isMut": false,
                    "isSigner": false
                }
            ],
            "args": [
                {
                    "name": "globalBump",
                    "type": "u8"
                },
                {
                    "name": "isLegendary",
                    "type": "u8"
                }
            ]
        },
        {
            "name": "withdrawNftFromPool",
            "accounts": [
                {
                    "name": "owner",
                    "isMut": true,
                    "isSigner": true
                },
                {
                    "name": "userPool",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "globalAuthority",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "userTokenAccount",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "destNftTokenAccount",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "nftMint",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "tokenProgram",
                    "isMut": false,
                    "isSigner": false
                }
            ],
            "args": [
                {
                    "name": "globalBump",
                    "type": "u8"
                }
            ]
        },
        {
            "name": "claimReward",
            "accounts": [
                {
                    "name": "owner",
                    "isMut": true,
                    "isSigner": true
                },
                {
                    "name": "userPool",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "globalAuthority",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "rewardVault",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "userRewardAccount",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "tokenProgram",
                    "isMut": false,
                    "isSigner": false
                }
            ],
            "args": [
                {
                    "name": "globalBump",
                    "type": "u8"
                }
            ]
        }
    ],
    "accounts": [
        {
            "name": "GlobalPool",
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "superAdmin",
                        "type": "publicKey"
                    },
                    {
                        "name": "totalStakedCount",
                        "type": "u64"
                    }
                ]
            }
        },
        {
            "name": "UserPool",
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "owner",
                        "type": "publicKey"
                    },
                    {
                        "name": "stakedCount",
                        "type": "u64"
                    },
                    {
                        "name": "stakedMints",
                        "type": {
                            "array": [
                                {
                                    "defined": "StakedData"
                                },
                                1000
                            ]
                        }
                    },
                    {
                        "name": "lastRewardTime",
                        "type": "i64"
                    },
                    {
                        "name": "remainingRewards",
                        "type": "u64"
                    }
                ]
            }
        }
    ],
    "types": [
        {
            "name": "StakedData",
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "mint",
                        "type": "publicKey"
                    },
                    {
                        "name": "stakedTime",
                        "type": "i64"
                    },
                    {
                        "name": "isLegendary",
                        "type": "u8"
                    }
                ]
            }
        }
    ],
    "errors": [
        {
            "code": 6000,
            "name": "Uninitialized",
            "msg": "Uninitialized account"
        },
        {
            "code": 6001,
            "name": "InvalidSuperOwner",
            "msg": "Invalid Super Owner"
        },
        {
            "code": 6002,
            "name": "InvalidUserPool",
            "msg": "Invalid User Pool Owner"
        },
        {
            "code": 6003,
            "name": "InvalidNFTAddress",
            "msg": "Invalid NFT Address"
        },
        {
            "code": 6004,
            "name": "InvalidWithdrawTime",
            "msg": "Invalid Withdraw Time"
        },
        {
            "code": 6005,
            "name": "InsufficientRewardVault",
            "msg": "Insufficient Reward Token Balance"
        }
    ]
}

export const IDL: StakingProgram = {
    "version": "0.1.0",
    "name": "shred_staking",
    "instructions": [
        {
            "name": "initialize",
            "accounts": [
                {
                    "name": "admin",
                    "isMut": true,
                    "isSigner": true
                },
                {
                    "name": "globalAuthority",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "rewardVault",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "systemProgram",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "rent",
                    "isMut": false,
                    "isSigner": false
                }
            ],
            "args": [
                {
                    "name": "globalBump",
                    "type": "u8"
                }
            ]
        },
        {
            "name": "initializeUserPool",
            "accounts": [
                {
                    "name": "userPool",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "owner",
                    "isMut": true,
                    "isSigner": true
                }
            ],
            "args": []
        },
        {
            "name": "stakeNftToPool",
            "accounts": [
                {
                    "name": "owner",
                    "isMut": true,
                    "isSigner": true
                },
                {
                    "name": "userPool",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "globalAuthority",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "userTokenAccount",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "destNftTokenAccount",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "nftMint",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "tokenProgram",
                    "isMut": false,
                    "isSigner": false
                }
            ],
            "args": [
                {
                    "name": "globalBump",
                    "type": "u8"
                },
                {
                    "name": "isLegendary",
                    "type": "u8"
                }
            ]
        },
        {
            "name": "withdrawNftFromPool",
            "accounts": [
                {
                    "name": "owner",
                    "isMut": true,
                    "isSigner": true
                },
                {
                    "name": "userPool",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "globalAuthority",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "userTokenAccount",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "destNftTokenAccount",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "nftMint",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "tokenProgram",
                    "isMut": false,
                    "isSigner": false
                }
            ],
            "args": [
                {
                    "name": "globalBump",
                    "type": "u8"
                }
            ]
        },
        {
            "name": "claimReward",
            "accounts": [
                {
                    "name": "owner",
                    "isMut": true,
                    "isSigner": true
                },
                {
                    "name": "userPool",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "globalAuthority",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "rewardVault",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "userRewardAccount",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "tokenProgram",
                    "isMut": false,
                    "isSigner": false
                }
            ],
            "args": [
                {
                    "name": "globalBump",
                    "type": "u8"
                }
            ]
        }
    ],
    "accounts": [
        {
            "name": "GlobalPool",
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "superAdmin",
                        "type": "publicKey"
                    },
                    {
                        "name": "totalStakedCount",
                        "type": "u64"
                    }
                ]
            }
        },
        {
            "name": "UserPool",
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "owner",
                        "type": "publicKey"
                    },
                    {
                        "name": "stakedCount",
                        "type": "u64"
                    },
                    {
                        "name": "stakedMints",
                        "type": {
                            "array": [
                                {
                                    "defined": "StakedData"
                                },
                                1000
                            ]
                        }
                    },
                    {
                        "name": "lastRewardTime",
                        "type": "i64"
                    },
                    {
                        "name": "remainingRewards",
                        "type": "u64"
                    }
                ]
            }
        }
    ],
    "types": [
        {
            "name": "StakedData",
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "mint",
                        "type": "publicKey"
                    },
                    {
                        "name": "stakedTime",
                        "type": "i64"
                    },
                    {
                        "name": "isLegendary",
                        "type": "u8"
                    }
                ]
            }
        }
    ],
    "errors": [
        {
            "code": 6000,
            "name": "Uninitialized",
            "msg": "Uninitialized account"
        },
        {
            "code": 6001,
            "name": "InvalidSuperOwner",
            "msg": "Invalid Super Owner"
        },
        {
            "code": 6002,
            "name": "InvalidUserPool",
            "msg": "Invalid User Pool Owner"
        },
        {
            "code": 6003,
            "name": "InvalidNFTAddress",
            "msg": "Invalid NFT Address"
        },
        {
            "code": 6004,
            "name": "InvalidWithdrawTime",
            "msg": "Invalid Withdraw Time"
        },
        {
            "code": 6005,
            "name": "InsufficientRewardVault",
            "msg": "Insufficient Reward Token Balance"
        }
    ]
}