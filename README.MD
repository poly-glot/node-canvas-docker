# Node Canvas
An internal utility script to generate thumbnail using [node canvas](https://github.com/Automattic/node-canvas).

## Environment Variables
| Key         		| Description  			|
|-------------------|-----------------------|
| IMAGEPATH   		| Content Cell 			|
| MODEL 	  		| Filename 	   			|
| BACKGROUND  		| Background Colour hex |
| PAGETEXT    		|              			|
| COMPONENTTEXT 	|              			|
| SUBCOMPONENTTEXT 	|              			|


## Example
```shell
docker run --rm \
        -e IMAGEPATH="/screenshots" \
        -e MODEL="/page" \
        -e BACKGROUND="#716DF2" \
        -e PAGETEXT="PAGETEXT" \
        -e COMPONENTTEXT="COMPONENTTEXT" \
        -e SUBCOMPONENTTEXT="SUBCOMPONENTTEXT" \
        -v ~/Desktop/screenshots:/screenshots \
        realpolyglot/node-canvas-docker
```

### Output
![Alt text](example.png?raw=true "Example output of docker command")
