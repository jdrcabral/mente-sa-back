import { Request, Response } from 'express';
import { Resource } from './models';
import { IResource, ResourceService } from './services/v1';

export class ResourceController {
  static async create(request: Request, response: Response){
    const { title, category, description, professionalId }: IResource = request.body;
    const resource: Resource = await ResourceService.create({ 
      title,
      category,
      description,
      professionalId
    });

    return response.status(201).json(resource);
  }

  static async list(request: Request, response: Response): Promise<Response>{
    const query = request.query;

    const resources = await ResourceService.list(query);

    return response.status(200).json(resources);
  }

  static async update(request: Request, response: Response): Promise<Response>{
    const { resourceId } = request.params;
    const updateData = request.body;

    const resource = await ResourceService.update(resourceId, updateData);
    
    return response.status(200).json(resource);
  }

  static async delete(request: Request, response: Response){
    const { resourceId } = request.params;

    await ResourceService.destroy(resourceId);

    return response.status(204).json({ deleted: 'Ok'});
  }  
}