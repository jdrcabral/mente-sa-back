import { NotFoundError } from '../../../../utils/errors';
import { Resource } from '../../models';

export interface IResource {
  title: string;
  category: string;
  description: string;
  professionalId: string;
}

export class ResourceService {

  public static async create({ title, category, description, professionalId}: IResource): Promise<Resource> {
    
    const resource = Resource.create({
      title,
      category,
      description,
      professionalId,
      isActive: true,
    });

    await resource.save()

    return resource;
  }

  public static async list(param: any): Promise<Resource[]> {
    // !query ? query = 'isActive=true' : query = `isActive=true , ${query}`
    const query = Object.assign(param, {isActive:true})
 
    const resources: Resource[] = await Resource.findBy(query);

    return resources;
  }

  public static async update(id: string, update_data: object) {
    const resource = await Resource.findOneBy({ id });

    if(!resource){
      throw new NotFoundError('Resource not found!');
    }

    await Resource.update(id, update_data );
    await resource.reload();
    return resource;
  }

  public static async destroy(id: string) {
    const resource = await Resource.findOneBy ({id});

    if(!resource) {
      throw new NotFoundError('Resourse not found!');
    }

    resource.isActive = false;
    resource.save();
  }

}