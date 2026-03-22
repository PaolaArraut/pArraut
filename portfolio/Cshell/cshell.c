#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <string.h>

#define MAX_INPUT 1024 //macro for allocating memory

int main(){
    char input[MAX_INPUT];
    while (1) {
        printf("psh> "); //display prompt
        fgets(input, MAX_INPUT, stdin); //user input

    }
}
