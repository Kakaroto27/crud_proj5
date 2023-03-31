import './styles/Register.css';
import {React, useEffect, useRef} from 'react';
import styled from 'styled-components';
import 'cors';
import Grid from '../components/Grid'
import 'react-toastify';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';


export const CadContainer = styled.form;
export const Inputcadastro = styled.div;
export const Label = styled.label;
export const Insere = styled.input;
export const Button = styled.button;

export const Cadastro = ({ onEdit, setOnEdit, getUsers }) => {
    const ref = useRef();
    const [ users, setUsers ] = useState([]);
    const [onEdit, setOnEdit] = useState(null);

    const getUsers = async () => {
        try{
            const res = await axios.get("http:localhost:5173");
            setUsers (res.data.sort((a,b) => (a.nome > b.nome? 1: -1)));
        } catch(error) {
            toast.error(error);
        }
    };

    useEffect(() => {
        if (onEdit){
            const user = ref.current;

            user.nome.value = onEdit.nome;
            user.email.value = onedit.email;
            user.fone.value = onEdit.fone;
            user.data_nascimento.value = onEdit.data_nascimento;
        }
    }, [onEdit]); 

    const handleSubmit = async (e) =>{
      const user = ref.current;
        if(
            !user.nome.value||
            !user.email.value||
            !user.fone.value||
            !user.data_nascimento.value||
            !user.instrumento.value
        ) {
            return toast.warn("Preencha todos os campos!");
        };

        if (onEdit) {
            await axios
            .put("http://localhost:5173" + onEdit.id, {
                nome: user.nome.value,
                email: user.email.value,
                fone: user.fone.value,
                data_nascimento: user.data_nascimento.value,
                instrumento: user.instrumento.value,
            })
            .then(({data}) =>toast.success(data))
            .catch(({data}) =>toast.error(data))
        } else {
            await axios
            .post("http://localhost:5173", {
                nome: user.nome.value,
                email: user.email.value,
                fone: user.fone.value,
                data_nascimento: user.data_nascimento.value,
                instrumento: user.instrumento.value,
            })
            .then(({data}) =>toast.success(data))
            .catch(({data}) =>toast.error(data))
        };
         user.nome.value,
         user.email.value,
         user.fone.value,
         user.data_nascimento.value,
         user.instrumento.value

         setOnEdit(null);
         getUsers();
    };

    return (
        <CadContainer ref={ref} onSubmit={handleSubmit}>
            <Inputcadastro>
            <Label>Nome</Label>
            <Insere name='nome' />
            </Inputcadastro>

            <Inputcadastro>
            <Label>Email</Label>
            <Insere name='Email' />
            </Inputcadastro>

            <Inputcadastro>
            <Label>Telefone</Label>
            <Insere name='Telefone' />
            </Inputcadastro>

            <Inputcadastro>
            <Label>Data Nascimento</Label>
            <Insere name='datanasc' type="date" />
            </Inputcadastro>

            <Inputcadastro>
            <Label>Instrumento</Label>
            <Insere name='Intrumento' />
            </Inputcadastro>

            <Button type="submit">SALVAR</Button>
        

        <Grid users={users} setUsers={setUsers } setOnEdit={setOnEdit}/>
        <ToastContainer autoClose={3000} position={toast.POSITION.BOTTON_RIGTH} />
        </CadContainer>);
};


export default Cadastro;