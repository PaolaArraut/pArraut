#include <cstdlib>
#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <string.h>
//Following basics of learning shell
void lsh_loop();

int main(int argc, char **argv)
{
lsh_loop();


return EXIT_SUCCESS;
    
}
void lsh_loop(void)
{
    char *line;
    char *args;
    int status;

    do{
        printf("> ");
        line = lsh_read_line();
        args = lsh_split_line(line);
        status = lsh_execute(args);

        free(line);
        free(args);
        
    }while(status);
    
}
