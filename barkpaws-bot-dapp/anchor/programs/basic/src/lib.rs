use anchor_lang::prelude::*;

declare_id!("FJ1VqtwwiDYCeHpEco7iobsRfq4Ru25dTUrVXB7ZRX4V");

#[program]
pub mod basic {
    use super::*;

    pub fn greet(_ctx: Context<Initialize>) -> Result<()> {
        msg!("GM!");
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
