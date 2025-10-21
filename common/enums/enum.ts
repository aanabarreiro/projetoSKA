export enum OrderColors_e{
    ''='',
    'Azul' = 'var(--color-blue)',
    'Vermelho' = 'var(--color-red)',
    'Verde' = 'var(--color-green)',
    'Amarelo' = 'var(--color-yellow)',
}

export enum ProductionStatus_e{
    InProduction= 'Em Produção',
    WaitingProduction= 'Aguardando Produção',
    LunchStop= 'Parada - almoço',
    TrainingStop= 'Parada - treinamento',
    PowerOutageStop= 'Parada - queda de energia',
    OperatorChangeStop= 'Parada - troca de operador',
    MaintenanceStop= 'Parada - manutenção'
}

export enum ProductionStatusColors_e{
    InProduction= 'var(--color-success)',
    WaitingProduction= 'var(--color-dark-gray-200)',
    Stop = 'var(--color-error)'
}