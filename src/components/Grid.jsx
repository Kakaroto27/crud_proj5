import React from "react";
import Grid from '../components/styles/Grid.css'
import axios from "axios";
import {FaTrash, FaEdit } from 'react-icons/fa';
import { Toast } from "react-toastify/dist/components";
import { useState } from 'react';
import "../routes/Register";
import { toast } from "react-toastify";


export const Thead = styled.thead;
export const Tr = styled.tr;
export const Th = styled.th`
@media (max-width: 500px){ 
        ${(props) => props.onlyWeb && "display: none " }
        `;
export const Td = styled.td

const Grid = ({users, setUsers, setOnEdit}) => {
    const handleEdit = (item) => {
        setOnEdit(item);
    };

    const handleDelete = async(id) => {
        await axios
        .delete("http:localhost/5173" + id)
        .then(({ data }) => {
            const newArray = users.filter((user) => user.id !== id);

            setUsers(newArray);
            toast.sucess(data);
        })
        .catch(({data})=> toast.error(data));

    setOnEdit(null);
};

    return (
        <Tabelafull>
            <Thead>
                <Tr>
                    <Th>Nome</Th>
                    <Th>Email</Th>
                    <Th onlyWeb>Telefone</Th>
                    <Th> Instrumento</Th>
                    <Th>  </Th>
                    <Th>  </Th>
                </Tr>
            </Thead>

            <Tbody>
                {users.map((item, i) => (
                    <Tr key={i}>
                        <Td width="30%">{item.nome}</Td>
                        <Td width="30%">{item.email}</Td>
                        <Td width="20%" onlyWeb >{item.fone}</Td>
                        <Td width="30%">{item.instrumento}</Td>
                        <Td alignCenter width="5%">
                            <FaEdit onClick={() => handleEdit(item)} /></Td>
                        <Td alignCenter width="5%">
                            <FaTrash onClick={() => handleDelete(item.id)} />
                        </Td>
                    </Tr>
                ) )}
            </Tbody>


            <ToastContainer autoClose={3000} position={toast.POSITION.BOTTON_RIGTH} />
        </Tabelafull>



    );
};

export default Grid;