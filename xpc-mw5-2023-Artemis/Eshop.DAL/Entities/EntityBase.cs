using System;

namespace Eshop.DAL.Entities
{
    internal abstract class EntityBase : IEntity
    {
        public Guid Id { get; set; }
    }
}
