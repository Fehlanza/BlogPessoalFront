import React, { useState, useEffect, ChangeEvent } from 'react';
import { Box } from '@mui/material';
import { Button, Grid, TextField, Typography } from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';
import { cadastroUsuario } from '../../services/Service'
import User from '../../models/User';
import './CadastroUsuario.css';

function CadastroUsuario() {

    let navigate = useNavigate();

    const [confirmarSenha, setConfirmarSenha] = useState<String>("")

    const [user, setUser] = useState<User>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: ''
        })

    const [userResult, setUserResult] = useState<User>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: ''
        })

    useEffect(() => {
        if (userResult.id !== 0) {
            navigate("/login")
        }
    }, [userResult])


    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
        setConfirmarSenha(e.target.value)
    }


    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

        setUser({
            ...user,
            [e.target.name]: e.target.value
        })

    }
    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        if (confirmarSenha == user.senha) {
            await cadastroUsuario('/usuarios/cadastrar', user, setUserResult)
            alert('Usuario cadastrado com sucesso.')
        } else {
            alert('Dados inconsistentes. Favor verificar as informações de cadastro.')
        }
    }

    return (
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid item xs={6} className='imagem2'></Grid>
            <Grid item xs={6} alignItems='center'>
                <Box paddingX={10}>
                    <form onSubmit={onSubmit}>
                        <Typography variant='h3' gutterBottom color='textPrimary' align='center' className="textos2"> Cadastrar</Typography>
                        <TextField value={user.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='nome' label='Nome' variant='outlined' name='nome' margin='normal' fullWidth></TextField>
                        <TextField value={user.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='Usuario' variant='outlined' name='usuario' margin='normal' fullWidth></TextField>
                        <TextField value={user.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='Senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth></TextField>
                        <TextField value={confirmarSenha} onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)} id='confirmarSenha' label='confirmarSenha' variant='outlined' name='confirmarSenha' margin='normal' type='password' fullWidth></TextField>
                        <Box marginTop={2} textAlign='center'>
                            <Link to='/login' className='text-decorator-none2'>
                                <Button variant='contained' color='secondary' className='btnCancelar'>
                                    Cancelar
                                </Button>
                            </Link>
                            <Button type='submit' variant='contained' color='primary'>
                                Cadastrar
                            </Button>
                        </Box>
                    </form>
                </Box>
            </Grid>

        </Grid>
    )
}

export default CadastroUsuario;