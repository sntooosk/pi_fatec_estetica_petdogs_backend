import type { Request, Response } from "express"
import type { AuthenticatedRequest } from "../../types/request.types.js"
import authService from "./auth.service.js"

class AuthController {
    public async me(req: AuthenticatedRequest, res: Response): Promise<Response> {
        return res.status(200).json({ user: req.user })
    }

    public async register(req: Request, res: Response): Promise<Response> {
        try {
            const { name, email, password, telefone } = req.body ?? {}
            const result = await authService.register({ name, email, password, telefone })

            return res.status(201).json(result)
        } catch (error) {
            const message = error instanceof Error ? error.message : "Erro ao cadastrar usuário"
            return res.status(400).json({ message })
        }
    }

    public async login(req: Request, res: Response): Promise<Response> {
        try {
            const { email, password } = req.body ?? {}
            const result = await authService.login({ email, password })

            return res.status(200).json(result)
        } catch (error) {
            const message = error instanceof Error ? error.message : "Erro ao autenticar usuário"
            return res.status(401).json({ message })
        }
    }

    public async forgotPassword(req: Request, res: Response): Promise<Response> {
        try {
            const { email } = req.body ?? {}
            const result = await authService.forgotPassword({ email })

            return res.status(200).json(result)
        } catch (error) {
            const message = error instanceof Error ? error.message : "Erro ao solicitar recuperação de senha"
            return res.status(400).json({ message })
        }
    }

    public async resetPassword(req: Request, res: Response): Promise<Response> {
        try {
            const { token, password } = req.body ?? {}
            const result = await authService.resetPassword({ token, password })

            return res.status(200).json(result)
        } catch (error) {
            const message = error instanceof Error ? error.message : "Erro ao redefinir senha"
            return res.status(400).json({ message })
        }
    }
}

export default new AuthController()
