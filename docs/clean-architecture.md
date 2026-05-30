# Clean Architecture

Este backend foi reorganizado para separar regras de negócio, casos de uso e detalhes externos.

## Camadas

- `src/domain/entities`: entidades de domínio e contratos de dados centrais, sem dependência de Express ou Mongoose.
- `src/application/use-cases`: casos de uso/application services que coordenam validações e regras da aplicação.
- `src/application/ports`: interfaces (ports) que descrevem o que a aplicação precisa de repositórios ou integrações externas.
- `src/adapters/http`: controllers, routes, presenters implícitos via respostas HTTP JSON e middlewares Express.
- `src/infrastructure`: frameworks e tecnologias externas, incluindo modelos Mongoose e implementações concretas de repositórios.
- `src/config`: configuração de infraestrutura compartilhada, como conexão de banco.

## Fluxo de dependências

```text
Express/HTTP (adapters) -> application/use-cases -> domain/entities
                                      ^
                                      |
                    application/ports (interfaces)
                                      ^
                                      |
                 infrastructure/database/mongoose (adapters)
```

As dependências devem apontar para dentro: controllers chamam casos de uso, casos de uso trabalham com entidades/ports, e detalhes como Mongoose ficam em `infrastructure`.

## Repositórios e integrações externas

As interfaces em `src/application/ports/repositories` definem os contratos esperados pela aplicação. As implementações Mongoose em `src/infrastructure/database/mongoose/repositories` encapsulam consultas, populates e filtros específicos do MongoDB.
