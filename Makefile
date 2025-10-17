DOCKER_HOME := /app
project_dir := $(shell pwd)
project_name := $(notdir $(project_dir))

# Build the Docker image (with caching)
.PHONY: build
build:
	docker build -t $(project_name) -f Dockerfile .
	rm -rf ./node_modules
	CID=$$(docker create $(project_name)); \
	docker cp $$CID:$(DOCKER_HOME)/node_modules ./node_modules; \
	docker cp $$CID:$(DOCKER_HOME)/package-lock.json ./package-lock.json; \
	docker rm $$CID

# Force rebuild without cache
.PHONY: build-no-cache
build-no-cache:
	docker build --no-cache -t $(project_name) -f Dockerfile .

define run
	@$(MAKE) build
	docker run --rm \
		-v $(project_dir):$(DOCKER_HOME) \
		-v /app/node_modules \
		$1 $2 $3 $4
endef

BASH := /usr/bin/env bash
ASH := /bin/ash

REACT := npm run dev -- --host 0.0.0.0
TEST := npm run test -- --run
LINT := npm run lint
FORMAT := npm run format

.PHONY: run-shell
run-shell:
	@$(call run,-it,$(project_name),$(BASH))

.PHONY: run-react-local
run-react-local:
	@$(call run,-p 5173:5173 -it,$(project_name),$(REACT))

.PHONY: test
test:
	@$(call run,-it,$(project_name),$(TEST))

.PHONY: lint
lint:
	@$(call run,-it,$(project_name),$(LINT))

.PHONY: fmt
fmt:
	@$(call run,-it,$(project_name),$(FORMAT))

