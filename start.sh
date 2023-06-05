#!/bin/bash

clear
echo -e "\033[0;34m\033[0mBem vindo ao Game! yeeh \n" 
echo -e "Escolha uma das opções abaixo:"

read -p "Instalar depedências? 'S' | 'N': " nextOption

case $nextOption in
  "S" | "s")
    clear
    yarn install
    clear
    echo -e "\n\033[0;34m ✓✓:\033[0m Depedências instaladas\n" 

    echo -e "Digite para 1 = Funcional"
    echo -e "Digite para 2 = Orientado a Objetos\n"

    read -p "Digite 1 ou 2: " input

    clear
    yarn install

    case $input in
      "1" | 1)
        yarn start:FP
        ;;
      "2" | 2)
        yarn start:OOP
        ;;
      *)
        echo "Entrada inválida"
        ;;
    esac

    ;;
  "N" | "n")
    echo -e "\nOkay então adios!\n"
    ;;
  *)
    echo "Entrada inválida"
    ;;
esac
