.PHONY: all clean install serve

all: serve

clean:

install: clean

serve:
	python3 -m http.server 8080