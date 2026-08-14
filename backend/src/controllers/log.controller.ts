import type { Request, Response, NextFunction } from "express";
import { createLogServices, getLogsServices } from "../services/log.services.js";

export const createLog = async(
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const { level, message, service, metaData } = req.body;

        const log = await createLogServices(
            level,
            message,
            service,
            metaData
        );

        return res.status(201).json({
            success: true,
            log
        });

    } catch (error) {
        next(error)
    }
};

export const getLogs = async(
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {

        const { level, service, page, limit } = req.query;
        const logs = await getLogsServices(
            level as string | undefined,
            service as string | undefined,
            Number(page) || 1,
            Number(limit) || 10
        );

        return res.status(200).json({
            success: true,
            logs
        })
    } catch (error) {
        next(error)
    }
};