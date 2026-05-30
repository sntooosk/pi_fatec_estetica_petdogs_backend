import type { NextFunction, Response } from "express"
import authService from "../../../application/use-cases/auth/auth.use-case.js"
import type { UserRole } from "../../../domain/entities/auth.entity.js"
import type { AuthenticatedRequest } from "../../../types/request.types.js"

export function ensureAuthenticated(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    const authorization = req.headers.authorization

    if (!authorization?.startsWith("Bearer ")) {
        return res.status(401).json({ message: "Token de autenticação não informado" })
    }

    try {
        const token = authorization.replace("Bearer ", "")
        req.user = authService.verifyToken(token)

        return next()
    } catch (error) {
        const message = error instanceof Error ? error.message : "Token inválido"
        return res.status(401).json({ message })
    }
}

export function ensureRoles(roles: UserRole[]) {
    return (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
        if (!req.user || !roles.includes(req.user.role)) {
            return res.status(403).json({ message: "Usuário não autorizado para esta ação" })
        }

        return next()
    }
}
